from django.urls import path
from . import views

urlpatterns = [
    path('jira-issues/', views.jira_issues, name='jira_issues'),
    path('create-jira-issue/', views.create_jira_issue_view, name='create_jira_issue'),
    path('create-issue-form/', views.create_issue_form, name='create_issue_form'),
    path('process-llm-prompt/', views.process_llm_prompt, name='process_llm_prompt'),
]
