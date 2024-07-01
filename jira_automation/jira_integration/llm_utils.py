import google.generativeai as genai
from google.api_core import exceptions as google_exceptions
import os
import json
import requests
from jira import JIRA
from dotenv import load_dotenv
from typing import List, Dict, Any

# Load environment variables
load_dotenv()

# Initialize the Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-1.5-pro')

def connect_jira():
    jira_options = {'server': f"https://{os.getenv('JIRA_DOMAIN')}.atlassian.net"}
    jira = JIRA(options=jira_options, basic_auth=(os.getenv('EMAIL'), os.getenv('API_KEY')))
    return jira

def view_issues() -> List[Dict[str, Any]]:
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
    
    return issues_list

def create_jira_issue(summary: str, description: str) -> Dict[str, Any]:
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

def get_all_users() -> List[Dict[str, str]]:
    jira = connect_jira()
    users = jira.search_users(query='')
    return [{'name': user.displayName, 'email': user.emailAddress} for user in users]

def create_user(display_name: str, email: str, password: str) -> Dict[str, Any]:
    jira = connect_jira()
    new_user = jira.create_user(
        username=email,
        email=email,
        display_name=display_name,
        password=password
    )
    return {
        'name': new_user.displayName,
        'email': new_user.emailAddress,
    }

def add_file_attachment(issue_key: str, file_path: str) -> Dict[str, Any]:
    jira = connect_jira()
    issue = jira.issue(issue_key)
    attachment = jira.add_attachment(issue=issue, attachment=file_path)
    return {
        'filename': attachment.filename,
        'size': attachment.size,
    }

def get_issue_comments(issue_key: str) -> List[Dict[str, str]]:
    jira = connect_jira()
    comments = jira.comments(issue_key)
    return [{'author': comment.author.displayName, 'body': comment.body} for comment in comments]

def add_comment(issue_key: str, comment: str) -> Dict[str, str]:
    jira = connect_jira()
    new_comment = jira.add_comment(issue_key, comment)
    return {
        'author': new_comment.author.displayName,
        'body': new_comment.body,
    }

def edit_comment(issue_key: str, comment_id: str, new_comment: str) -> Dict[str, str]:
    jira = connect_jira()
    updated_comment = jira.comment(issue_key, comment_id).update(body=new_comment)
    return {
        'author': updated_comment.author.displayName,
        'body': updated_comment.body,
    }

def get_issue_status(issue_key: str) -> str:
    jira = connect_jira()
    issue = jira.issue(issue_key)
    return issue.fields.status.name

def handle_prompt(prompt: str) -> Dict[str, Any]:
    try:
        response = model.generate_content(
            f"""
            Analyze the following user prompt and determine the appropriate action:
            
            {prompt}
            
            Respond with a JSON object containing the action and any relevant parameters.
            
            Valid actions are:
            - "view_issues"
            - "create_issue"
            - "get_all_users"
            - "create_user"
            - "add_file_attachment"
            - "get_issue_comments"
            - "add_comment"
            - "edit_comment"
            - "get_issue_status"
            
            Include relevant parameters for each action.
            """,
            generation_config=genai.GenerationConfig(
                response_mime_type="application/json"
            )
        )
        
        action_data = json.loads(response.text)
        action = action_data.get('action')
        parameters = action_data.get('parameters', {})
        
        if action == 'view_issues':
            return {'action': action, 'issues': view_issues()}
        elif action == 'create_issue':
            return {'action': action, 'issue': create_jira_issue(parameters.get('summary'), parameters.get('description'))}
        elif action == 'get_all_users':
            return {'action': action, 'users': get_all_users()}
        elif action == 'create_user':
            return {'action': action, 'user': create_user(parameters.get('display_name'), parameters.get('email'), parameters.get('password'))}
        elif action == 'add_file_attachment':
            return {'action': action, 'attachment': add_file_attachment(parameters.get('issue_key'), parameters.get('file_path'))}
        elif action == 'get_issue_comments':
            return {'action': action, 'comments': get_issue_comments(parameters.get('issue_key'))}
        elif action == 'add_comment':
            return {'action': action, 'comment': add_comment(parameters.get('issue_key'), parameters.get('comment'))}
        elif action == 'edit_comment':
            return {'action': action, 'comment': edit_comment(parameters.get('issue_key'), parameters.get('comment_id'), parameters.get('new_comment'))}
        elif action == 'get_issue_status':
            return {'action': action, 'status': get_issue_status(parameters.get('issue_key'))}
        else:
            return {'action': 'error', 'message': 'Invalid action'}
    
    except google_exceptions.InvalidArgument as e:
        return {"action": "error", "message": str(e)}
    except Exception as e:
        return {"action": "error", "message": f"An unexpected error occurred: {str(e)}"}
