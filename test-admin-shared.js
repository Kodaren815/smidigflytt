// Test script for the shared storage admin functionality
const baseUrl = 'http://localhost:3001'

async function testAdminFunctionality() {
  console.log('🚀 Testing Admin Panel with Shared Storage\n')
  
  try {
    // Step 1: Submit a contact form
    console.log('1. Submitting contact form...')
    const contactResponse = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User Contact',
        email: 'contact@test.com',
        phone: '070-123-4567',
        subject: 'Test Contact Subject',
        message: 'This is a test contact message'
      })
    })
    
    if (contactResponse.ok) {
      console.log('✅ Contact form submitted successfully')
    } else {
      console.log('❌ Contact form submission failed')
    }

    // Step 2: Submit a quote request
    console.log('2. Submitting quote request...')
    const quoteResponse = await fetch(`${baseUrl}/api/quotes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        serviceType: 'bohagsflytt',
        name: 'Test User Quote',
        email: 'quote@test.com',
        phone: '070-987-6543',
        address: 'Test Address 123',
        postalCode: '12345'
      })
    })
    
    if (quoteResponse.ok) {
      console.log('✅ Quote request submitted successfully')
    } else {
      console.log('❌ Quote request submission failed')
    }

    // Step 3: Wait a moment for processing
    console.log('3. Waiting for processing...')
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Step 4: Check admin panel
    console.log('4. Checking admin panel...')
    const adminResponse = await fetch(`${baseUrl}/api/admin?password=smidigflytt2024smidigflytt365`)
    
    if (adminResponse.ok) {
      const adminData = await adminResponse.json()
      console.log('✅ Admin panel accessible')
      console.log(`📊 Total messages: ${adminData.stats.totalMessages}`)
      console.log(`📧 Contacts: ${adminData.stats.totalContacts}`)
      console.log(`💼 Quotes: ${adminData.stats.totalQuotes}`)
      console.log(`🔧 Damage Reports: ${adminData.stats.totalDamageReports}`)
      
      if (adminData.stats.totalMessages > 0) {
        console.log('\n📝 Messages found:')
        adminData.messages.forEach((msg, index) => {
          console.log(`   ${index + 1}. [${msg.type}] ${msg.name || msg.fullName} - ${new Date(msg.timestamp).toLocaleString()}`)
        })
        console.log('\n🎉 SUCCESS: Admin panel shows submitted data!')
      } else {
        console.log('\n⚠️  WARNING: No messages found in admin panel')
      }
    } else {
      console.log('❌ Admin panel request failed')
    }

    console.log('\n🏁 Test completed!')

  } catch (error) {
    console.error('💥 Test failed with error:', error)
  }
}

// Run the test
testAdminFunctionality()
