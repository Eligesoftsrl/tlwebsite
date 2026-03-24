"""
Backend API tests for Tenuta Leone
Tests for:
- /api/ - Root API endpoint
- /api/contact - Contact form submission
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestAPIRoot:
    """Test root API endpoint"""
    
    def test_api_root_returns_200(self):
        """Test /api/ returns 200 status"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert "status" in data
        assert data["status"] == "running"
        print(f"✓ API root endpoint working: {data}")


class TestContactAPI:
    """Test contact form API endpoint"""
    
    def test_contact_success_with_full_data(self):
        """Test contact submission with all fields"""
        payload = {
            "name": "TEST_Full User",
            "email": "test.full@example.com",
            "phone": "1234567890",
            "event_type": "matrimonio",
            "event_date": "2026-06-15",
            "guests": "100",
            "message": "Test message with full data"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        assert "message" in data
        assert data["message"] == "Grazie per averci contattato! Ti risponderemo al più presto."
        assert "id" in data
        assert len(data["id"]) > 0
        print(f"✓ Contact form full data: {data}")
    
    def test_contact_success_with_required_fields_only(self):
        """Test contact submission with only required fields (name, email)"""
        payload = {
            "name": "TEST_Minimal User",
            "email": "test.minimal@example.com",
            "phone": "",
            "event_type": "",
            "event_date": "",
            "guests": "",
            "message": ""
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        assert "id" in data
        print(f"✓ Contact form minimal data: {data}")
    
    def test_contact_fails_without_name(self):
        """Test contact submission fails without name"""
        payload = {
            "name": "",
            "email": "test.noname@example.com",
            "phone": "",
            "event_type": "",
            "event_date": "",
            "guests": "",
            "message": ""
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == False
        assert "Il nome è obbligatorio" in data["message"]
        print(f"✓ Contact form validation (no name): {data}")
    
    def test_contact_fails_without_email(self):
        """Test contact submission fails without email"""
        payload = {
            "name": "TEST_NoEmail User",
            "email": "",
            "phone": "",
            "event_type": "",
            "event_date": "",
            "guests": "",
            "message": ""
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == False
        assert "email è obbligatoria" in data["message"]
        print(f"✓ Contact form validation (no email): {data}")
    
    def test_contact_with_whitespace_only_name_fails(self):
        """Test contact submission with whitespace-only name fails"""
        payload = {
            "name": "   ",
            "email": "test.whitespace@example.com",
            "phone": "",
            "event_type": "",
            "event_date": "",
            "guests": "",
            "message": ""
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == False
        print(f"✓ Contact form validation (whitespace name): {data}")
    
    def test_contact_with_different_event_types(self):
        """Test contact submission with different event types"""
        event_types = ["matrimonio", "comunione", "battesimo", "evento_aziendale"]
        
        for event_type in event_types:
            payload = {
                "name": f"TEST_{event_type} User",
                "email": f"test.{event_type}@example.com",
                "phone": "1234567890",
                "event_type": event_type,
                "event_date": "2026-07-20",
                "guests": "50",
                "message": f"Testing {event_type} event type"
            }
            response = requests.post(f"{BASE_URL}/api/contact", json=payload)
            
            assert response.status_code == 200
            data = response.json()
            assert data["success"] == True
            print(f"✓ Contact form with event type '{event_type}': success")


class TestStatusAPI:
    """Test status check API endpoints"""
    
    def test_get_status_returns_list(self):
        """Test GET /api/status returns a list"""
        response = requests.get(f"{BASE_URL}/api/status")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ Status GET returns list with {len(data)} items")
    
    def test_create_status_check(self):
        """Test POST /api/status creates a status check"""
        payload = {"client_name": "TEST_StatusClient"}
        response = requests.post(f"{BASE_URL}/api/status", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert "id" in data
        assert data["client_name"] == "TEST_StatusClient"
        assert "timestamp" in data
        print(f"✓ Status POST created: {data['id']}")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
