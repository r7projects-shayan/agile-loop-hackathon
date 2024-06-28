import google.generativeai as genai
import os
import json
from jira import JIRA
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize the Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-1.5-flash', generation_config={"response_mime_type": "application/json"})

def get_llm_response(prompt):
    response = model.generate_content(prompt)
    return response.text

def handle_prompt(prompt):
    llm_response = get_llm_response(prompt)
    
    # Log the full response for debugging
    print("LLM Response:", llm_response)
    
    try:
        # Parse the LLM response as JSON
        response_data = json.loads(llm_response)
        
        # Extract the action field
        action = response_data.get('action')
        
        if action == 'view_issues':
            return view_issues()
        elif action == 'create_issue':
            summary = response_data.get('summary', 'Default summary from LLM')  # Placeholder
            description = response_data.get('description', 'Default description from LLM')  # Placeholder
            return create_jira_issue(summary, description)
        else:
            return {'error': 'Unknown action'}
    except json.JSONDecodeError:
        return {'error': 'Invalid JSON from LLM'}

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
