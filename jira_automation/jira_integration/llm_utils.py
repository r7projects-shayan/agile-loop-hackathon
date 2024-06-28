import google.generativeai as genai
import os
import re
from jira import JIRA
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize the Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-1.5-flash')

def get_llm_response(prompt):
    response = model.generate_content(prompt)
    return response.text

def handle_prompt(prompt):
    llm_response = get_llm_response(prompt)
    # Log the full response for debugging
    print("LLM Response:", llm_response)
    
    # Define regex patterns for actions
    view_issues_pattern = re.compile(r'view open issues', re.IGNORECASE)
    create_issue_pattern = re.compile(r'create issue', re.IGNORECASE)
    
    # Check for "view open issues"
    if view_issues_pattern.search(llm_response):
        return view_issues()
    
    # Check for "create issue"
    elif create_issue_pattern.search(llm_response):
        # Extract summary and description (you will need a more robust extraction)
        summary = 'Default summary from LLM'  # Placeholder
        description = 'Default description from LLM'  # Placeholder
        return create_jira_issue(summary, description)
    
    return {'error': 'Unknown action'}

def connect_jira():
    jira_options = {'server': f"https://{os.getenv('JIRA_DOMAIN')}.atlassian.net"}
    jira = JIRA(options=jira_options, basic_auth=(os.getenv('EMAIL'), os.getenv('API_KEY')))
    return jira

def view_issues():
    jira = connect_jira()
    issues = jira.search_issues(f"project={os.getenv('JIRA_PROJECT_KEY')}")
    
    issues_list = []
    for issue in issues:
        issues_list.append({
            'key': issue.key,
            'summary': issue.fields.summary,
            'description': issue.fields.description,
            'status': issue.fields.status.name,
        })
    
    return {'issues': issues_list}

def create_jira_issue(summary, description):
    jira = connect_jira()
    issue_dict = {
        'project': {'key': os.getenv('JIRA_PROJECT_KEY')},
        'summary': summary,
        'description': description,
        'issuetype': {'name': 'Task'},
    }
    new_issue = jira.create_issue(fields=issue_dict)

    return {
        'key': new_issue.key,
        'summary': new_issue.fields.summary,
        'description': new_issue.fields.description,
    }
