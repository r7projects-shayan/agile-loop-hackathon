from src.jira.jira_api import create_ticket

def handle_create_ticket(chat_input):
    project_key = chat_input.get("project_key", "ALH")
    summary = chat_input.get("summary", "No summary provided")
    description = chat_input.get("description", "No description provided")
    
    response = create_ticket(project_key, summary, description)
    return response
