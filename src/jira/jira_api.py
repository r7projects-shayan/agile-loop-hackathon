import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

JIRA_URL = "https://lfanampe.atlassian.net/rest/api/2/issue"
HEADERS = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

EMAIL = os.getenv("EMAIL")
API_KEY = os.getenv("API_KEY")
AUTH = (EMAIL, API_KEY)

def create_ticket(project_key, summary, description, issue_type="Task"):
    payload = json.dumps({
        "fields": {
            "project": {"key": project_key},
            "summary": summary,
            "description": description,
            "issuetype": {"name": issue_type}
        }
    })
    response = requests.post(JIRA_URL, headers=HEADERS, data=payload, auth=AUTH)
    return response.json()
