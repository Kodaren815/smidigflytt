#!/usr/bin/env node

// Test script to verify API endpoints work correctly
const BASE_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3001';

async function testAPI(endpoint, method = 'GET', body = null) {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    if (body) {
      options.body = JSON.stringify(body);
    }
    
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    const data = await response.json();
    
    console.log(`\n✅ ${method} ${endpoint}`);
    console.log(`Status: ${response.status}`);
    console.log(`Response:`, data);
    
    return { success: response.ok, status: response.status, data };
  } catch (error) {
    console.log(`\n❌ ${method} ${endpoint}`);
    console.log(`Error:`, error.message);
    return { success: false, error: error.message };
  }
}

async function runTests() {
  console.log(`🚀 Testing API endpoints at ${BASE_URL}\n`);
  
  // Test 1: Contact form submission
  await testAPI('/api/contact', 'POST', {
    name: 'Test User',
    email: 'test@example.com',
    phone: '070-123-4567',
    subject: 'Test Subject',
    message: 'This is a test message'
  });
  
  // Test 2: Quote request submission
  await testAPI('/api/quotes', 'POST', {
    serviceType: 'Flytthjälp',
    name: 'Test User',
    email: 'test@example.com',
    phone: '070-123-4567',
    fromAddress: 'Test From Address',
    toAddress: 'Test To Address',
    date: '2024-01-01'
  });
  
  // Test 3: Damage report submission
  await testAPI('/api/damage-reports', 'POST', {
    fullName: 'Test User',
    personalNumber: '19901010-1234',
    email: 'test@example.com',
    phone: '070-123-4567',
    damageDateTime: '2024-01-01T10:00:00Z',
    damageLocation: 'Test Location',
    damageDescription: 'Test damage description',
    confirmed: true
  });
  
  // Test 4: Admin endpoint with correct password
  await testAPI('/api/admin?password=smidigflytt2024smidigflytt365', 'GET');
  
  // Test 5: Admin endpoint with wrong password
  await testAPI('/api/admin?password=wrong', 'GET');
  
  // Test 6: GET endpoints for data
  await testAPI('/api/contact', 'GET');
  await testAPI('/api/quotes', 'GET');
  await testAPI('/api/damage-reports', 'GET');
  
  console.log('\n🏁 Testing complete!');
}

// Run tests
runTests().catch(console.error);
