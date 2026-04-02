#!/usr/bin/env python3

import requests
import sys
from datetime import datetime

class TenuraLeoneAPITester:
    def __init__(self, base_url="https://luxury-journal-2.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        default_headers = {'Content-Type': 'application/json'}
        if headers:
            default_headers.update(headers)

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=default_headers, timeout=30)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=default_headers, timeout=30)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ PASSED - Status: {response.status_code}")
                if response.content:
                    try:
                        json_response = response.json()
                        print(f"   Response: {json_response}")
                        return success, json_response
                    except:
                        print(f"   Response: {response.text[:200]}...")
                        return success, response.text
                return success, {}
            else:
                error_msg = f"Expected {expected_status}, got {response.status_code}"
                print(f"❌ FAILED - {error_msg}")
                print(f"   Response: {response.text[:200]}...")
                self.failed_tests.append(f"{name}: {error_msg}")
                return False, {}

        except Exception as e:
            error_msg = f"Error: {str(e)}"
            print(f"❌ FAILED - {error_msg}")
            self.failed_tests.append(f"{name}: {error_msg}")
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET", 
            "api/",
            200
        )

    def test_api_status_get(self):
        """Test GET status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "api/status", 
            200
        )

    def test_api_status_post(self):
        """Test POST status check creation"""
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        return self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data=test_data
        )

    def test_contact_form_valid(self):
        """Test contact form submission with valid data"""
        contact_data = {
            "name": "Mario Rossi",
            "email": "mario.rossi@email.com", 
            "phone": "+39 123 456 7890",
            "event_type": "matrimonio",
            "message": "Vorrei informazioni per il mio matrimonio"
        }
        success, response = self.run_test(
            "Contact Form - Valid Data",
            "POST",
            "api/contact",
            200,
            data=contact_data
        )
        
        if success and response:
            if response.get('success') == True:
                print(f"   ✅ Contact form success: {response.get('message')}")
                print(f"   ✅ Contact ID: {response.get('id')}")
                return True
            else:
                print(f"   ❌ Contact form failed: {response.get('message')}")
                self.failed_tests.append("Contact Form - Valid Data: API returned success=False")
                return False
        return success

    def test_contact_form_minimal(self):
        """Test contact form with minimal required data"""
        contact_data = {
            "name": "Test User",
            "email": "test@example.com",
            "message": "Test message"
        }
        success, response = self.run_test(
            "Contact Form - Minimal Data", 
            "POST",
            "api/contact",
            200,
            data=contact_data
        )
        
        if success and response:
            if response.get('success') == True:
                print(f"   ✅ Minimal contact form success")
                return True
            else:
                print(f"   ❌ Minimal contact form failed: {response.get('message')}")
                self.failed_tests.append("Contact Form - Minimal Data: API returned success=False")
                return False
        return success

    def test_contact_form_invalid(self):
        """Test contact form with invalid data (empty required fields)"""
        contact_data = {
            "name": "",
            "email": "",
            "message": ""
        }
        success, response = self.run_test(
            "Contact Form - Invalid Data",
            "POST", 
            "api/contact",
            200,  # API should return 200 but with success=False
            data=contact_data
        )
        
        if success and response:
            if response.get('success') == False:
                print(f"   ✅ Invalid data correctly rejected: {response.get('message')}")
                return True
            else:
                print(f"   ❌ Invalid data was accepted (should be rejected)")
                self.failed_tests.append("Contact Form - Invalid Data: Should reject empty fields")
                return False
        return success

def main():
    print("🚀 Starting Tenuta Leone API Testing...")
    print("=" * 60)
    
    # Setup
    tester = TenuraLeoneAPITester()

    # Test API endpoints
    print("\n📋 Testing Core API Endpoints...")
    tester.test_api_root()
    tester.test_api_status_get()
    tester.test_api_status_post()
    
    print("\n📝 Testing Contact Form...")
    tester.test_contact_form_valid()
    tester.test_contact_form_minimal() 
    tester.test_contact_form_invalid()

    # Print final results
    print("\n" + "=" * 60)
    print("📊 FINAL TEST RESULTS")
    print("=" * 60)
    print(f"Total Tests: {tester.tests_run}")
    print(f"Passed: {tester.tests_passed}")
    print(f"Failed: {len(tester.failed_tests)}")
    print(f"Success Rate: {(tester.tests_passed/tester.tests_run*100):.1f}%")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failed in tester.failed_tests:
            print(f"   • {failed}")
    else:
        print("\n🎉 All tests passed!")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())