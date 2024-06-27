from django.urls import path
from . import views

urlpatterns = [
    path('jira-issues/', views.jira_issues, name='jira_issues'),
]
