# # jira_automation/jira_integration/urls.py
# from django.urls import path
# from . import views
# import requests

# urlpatterns = [
#     path('create-issue/', views.create_issue, name='create_issue'),
#     path('get-all-users/', views.get_all_users, name='get_all_users'),
#     path('create-user/', views.create_user, name='create_user'),
#     path('add-file-attachment/', views.add_file_attachment, name='add_file_attachment'),
#     path('get-issue-comments/', views.get_issue_comments, name='get_issue_comments'),
#     path('add-comment/', views.add_comment, name='add_comment'),
#     path('edit-comment/', views.edit_comment, name='edit_comment'),
#     path('get-issue-status/', views.get_issue_status, name='get_issue_status'),
#     path('process-llm-prompt/', views.process_llm_prompt, name='process_llm_prompt'),  
# ]

# jira_automation/jira_integration/urls.py
from django.urls import path
from . import views
import requests

urlpatterns = [
    # path('jira-issues/', views.jira_issues, name='jira_issues'),
    # path('create-jira-issue/', views.create_jira_issue, name='create_jira_issue'),
    # path('create-issue-form/', views.create_issue_form, name='create_issue_form'),
    path('process-llm-prompt/', views.process_llm_prompt, name='process_llm_prompt'),
    # path('setup-jira/', views.setup_jira, name='setup_jira'),
    # path('get-jira-users/', views.get_jira_users, name='get_jira_users'),
    path('create-user/', views.create_user, name='create_user'),
    path('add-file-attachment/', views.add_file_attachment, name='add_file_attachment'),
    path('get-issue-comments/', views.get_issue_comments, name='get_issue_comments'),
    path('add-comment/', views.add_comment, name='add_comment'),
    path('edit-comment/', views.edit_comment, name='edit_comment'),
    path('get-issue-status/', views.get_issue_status, name='get_issue_status'),
]