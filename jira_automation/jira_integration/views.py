from django.shortcuts import render
from django.http import JsonResponse, HttpResponseBadRequest
from jira import JIRA
import os
import json
from dotenv import load_dotenv
from .llm_utils import handle_prompt, view_issues, create_jira_issue
from django.views.decorators.csrf import csrf_exempt
import logging

logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

def jira_issues(request):
    issues = view_issues()
    return JsonResponse({'issues': issues})

def create_issue_form(request):
    return render(request, 'jira_integration/create_issue.html')

def create_jira_issue_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        summary = data.get('summary')
        description = data.get('description')

        if not summary or not description:
            return HttpResponseBadRequest('Summary and description are required.')

        issue = create_jira_issue(summary, description)
        return JsonResponse(issue)
    else:
        return HttpResponseBadRequest('Only POST method is allowed.')

def chat_interface(request):
    return render(request, 'jira_integration/chat_interface.html')

@csrf_exempt
def process_llm_prompt(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            prompt = data.get('prompt')
            if prompt:
                response = handle_prompt(prompt)
                return JsonResponse(response, safe=False)
            else:
                return JsonResponse({'error': 'No prompt provided'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    return JsonResponse({'error': 'Invalid HTTP method'}, status=405)
