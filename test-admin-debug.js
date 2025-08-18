const BASE_URL = 'http://localhost:3001';
const ADMIN_PASSWORD = 'smidigflytt2024smidigflytt365';

async function testCompleteFlow() {
  console.log('🧪 Testing complete admin flow with debugging...\n');

  try {
    // Test 1: Submit a contact form
    console.log('1️⃣ Submitting contact form...');
    const contactResponse = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Debug Test Contact',
        email: 'debug@example.com',
        phone: '0701234567',
        message: 'This is a debug test message',
        agreeToTerms: true
      })
    });
    
    const contactResult = await contactResponse.json();
    console.log('   Contact response:', contactResponse.status, contactResult);

    // Small delay
    await new Promise(resolve => setTimeout(resolve, 100));

    // Test 2: Check admin panel immediately after
    console.log('\n2️⃣ Checking admin panel after contact submission...');
    const adminResponse1 = await fetch(`${BASE_URL}/api/admin?password=${ADMIN_PASSWORD}`);
    const adminResult1 = await adminResponse1.json();
    console.log('   Admin response after contact:', adminResponse1.status);
    console.log('   Stats:', adminResult1.stats);
    console.log('   Debug info:', adminResult1.debugInfo);
    console.log('   Total messages:', adminResult1.messages?.length || 0);

    // Test 3: Submit a quote form
    console.log('\n3️⃣ Submitting quote form...');
    const quoteResponse = await fetch(`${BASE_URL}/api/quotes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        serviceType: 'flytthjälp',
        name: 'Debug Test Quote',
        email: 'quote@example.com',
        phone: '0709876543',
        movingFrom: 'Stockholm',
        movingTo: 'Göteborg',
        movingDate: '2024-03-15',
        rooms: '3',
        hasLift: false,
        hasPackingService: true,
        comments: 'Debug test quote request'
      })
    });
    
    const quoteResult = await quoteResponse.json();
    console.log('   Quote response:', quoteResponse.status, quoteResult);

    // Small delay
    await new Promise(resolve => setTimeout(resolve, 100));

    // Test 4: Check admin panel after both submissions
    console.log('\n4️⃣ Checking admin panel after both submissions...');
    const adminResponse2 = await fetch(`${BASE_URL}/api/admin?password=${ADMIN_PASSWORD}`);
    const adminResult2 = await adminResponse2.json();
    console.log('   Admin response after both:', adminResponse2.status);
    console.log('   Final stats:', adminResult2.stats);
    console.log('   Final debug info:', adminResult2.debugInfo);
    console.log('   Final total messages:', adminResult2.messages?.length || 0);

    // Show actual messages if any
    if (adminResult2.messages && adminResult2.messages.length > 0) {
      console.log('\n📝 Found messages:');
      adminResult2.messages.forEach((msg, idx) => {
        console.log(`   ${idx + 1}. ${msg.type} - ${msg.id} (${msg.timestamp})`);
      });
    }

    // Test 5: Make another admin call to see if persistence works
    console.log('\n5️⃣ Making second admin call to test persistence...');
    const adminResponse3 = await fetch(`${BASE_URL}/api/admin?password=${ADMIN_PASSWORD}`);
    const adminResult3 = await adminResponse3.json();
    console.log('   Second admin call stats:', adminResult3.stats);
    console.log('   Messages still there:', adminResult3.messages?.length || 0);

  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testCompleteFlow();
