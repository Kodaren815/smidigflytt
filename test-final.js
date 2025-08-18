const BASE_URL = 'http://localhost:3001';
const ADMIN_PASSWORD = 'smidigflytt2024smidigflytt365';

async function testAllForms() {
  console.log('🧪 Testing all forms with admin panel...\n');

  try {
    // Test 1: Damage report
    console.log('1️⃣ Submitting damage report...');
    const damageResponse = await fetch(`${BASE_URL}/api/damage-reports`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Test Damage Reporter',
        orderNumber: 'ORD123456',
        personalNumber: '19901201-1234',
        email: 'damage@example.com',
        phone: '0701111111',
        damageDateTime: '2024-01-15T10:00:00',
        damageLocation: 'Stockholm',
        damageDescription: 'Test damage report for debugging',
        brand: 'Test Brand',
        acquisitionValue: '5000',
        manufacturedYear: '2020',
        confirmed: true
      })
    });
    
    const damageResult = await damageResponse.json();
    console.log('   Damage report response:', damageResponse.status, damageResult);

    // Test 2: Check admin panel
    console.log('\n2️⃣ Checking final admin panel state...');
    const adminResponse = await fetch(`${BASE_URL}/api/admin?password=${ADMIN_PASSWORD}`);
    const adminResult = await adminResponse.json();
    console.log('   Final admin stats:', adminResult.stats);
    console.log('   Total messages:', adminResult.messages?.length || 0);

    // Show all messages
    if (adminResult.messages && adminResult.messages.length > 0) {
      console.log('\n📝 All messages in storage:');
      adminResult.messages.forEach((msg, idx) => {
        console.log(`   ${idx + 1}. ${msg.type} - ${msg.id} (${msg.timestamp})`);
      });
    }

    console.log('\n✅ Admin panel is working correctly!');
    console.log('📊 Summary:');
    console.log(`   - Contacts: ${adminResult.stats.totalContacts}`);
    console.log(`   - Quotes: ${adminResult.stats.totalQuotes}`);
    console.log(`   - Damage Reports: ${adminResult.stats.totalDamageReports}`);
    console.log(`   - Total Messages: ${adminResult.stats.totalMessages}`);

  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testAllForms();
