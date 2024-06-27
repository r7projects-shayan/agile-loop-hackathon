from django.shortcuts import render
from django.http import JsonResponse
from jira import JIRA
import os

def jira_issues(request):
    # Connect to Jira
    jira_options = {'server': 'https://lfanampe.atlassian.net'}
    jira = JIRA(options=jira_options, basic_auth=('L.fanampe@gmail.com', ''))
    
    # Fetch issues
    issues = jira.search_issues('project=ALH')
    
    # Prepare data to display
    issues_list = []
    for issue in issues:
        issues_list.append({
            'key': issue.key,
            'summary': issue.fields.summary,
            'description': issue.fields.description,
        })
    
    # Return as JSON for now
    return JsonResponse({'issues': issues_list})
