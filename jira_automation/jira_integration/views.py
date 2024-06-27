# jira_integration/views.py
from django.shortcuts import render
from django.http import JsonResponse, HttpResponseBadRequest
from jira import JIRA
import os
import json
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def jira_issues(request):
    # Connect to Jira using environment variables
    jira_options = {'server': f"https://{os.getenv('JIRA_DOMAIN')}.atlassian.net"}
    jira = JIRA(options=jira_options, basic_auth=(os.getenv('EMAIL'), os.getenv('API_KEY')))
    
    # Fetch issues
    issues = jira.search_issues(f"project={os.getenv('JIRA_PROJECT_KEY')}")
    
    # Prepare data to display
    issues_list = []
    for issue in issues:
        issues_list.append({
            'key': issue.key,
            'summary': issue.fields.summary,
            'description': issue.fields.description,
            'status': issue.fields.status.name,         
        })
    
    # Return as JSON for now
    return JsonResponse({'issues': issues_list})

def create_issue_form(request):
    return render(request, 'jira_integration/create_issue.html')

def create_jira_issue(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        summary = data.get('summary')
        description = data.get('description')

        if not summary or not description:
            return HttpResponseBadRequest('Summary and description are required.')

        # Connect to Jira using environment variables
        jira_options = {'server': f"https://{os.getenv('JIRA_DOMAIN')}.atlassian.net"}
        jira = JIRA(options=jira_options, basic_auth=(os.getenv('EMAIL'), os.getenv('API_KEY')))

        # Create a new issue
        issue_dict = {
            'project': {'key': os.getenv('JIRA_PROJECT_KEY')},
            'summary': summary,
            'description': description,
            'issuetype': {'name': 'Task'},
        }
        new_issue = jira.create_issue(fields=issue_dict)

        return JsonResponse({
            'key': new_issue.key,
            'summary': new_issue.fields.summary,
            'description': new_issue.fields.description,
        })
    else:
        return HttpResponseBadRequest('Only POST method is allowed.')
