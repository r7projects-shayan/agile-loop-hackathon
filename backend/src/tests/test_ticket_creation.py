import unittest
from src.chat.ticket_creation import handle_create_ticket

class TestTicketCreation(unittest.TestCase):
    
    def test_create_ticket(self):
        chat_input = {
            "project_key": "ALH",
            "summary": "Test Ticket",
            "description": "Testing ticket creation"
        }
        response = handle_create_ticket(chat_input)
        self.assertIn("id", response)
        self.assertIn("key", response)

if __name__ == "__main__":
    unittest.main()

