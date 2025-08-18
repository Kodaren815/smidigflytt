// Shared in-memory storage across all API routes
// Note: In serverless environments like Vercel, this will only work within the same function execution
// For persistent cross-function storage, you need a database or external service

interface BaseMessage {
  id: string
  type: string
  timestamp: string
  [key: string]: unknown
}

// Use globalThis to ensure storage persists across module reloads in development
declare global {
  var __smidigflytt_storage: BaseMessage[] | undefined
}

// Initialize global storage
if (!globalThis.__smidigflytt_storage) {
  globalThis.__smidigflytt_storage = []
}

export function addMessage(message: BaseMessage) {
  if (!globalThis.__smidigflytt_storage) {
    globalThis.__smidigflytt_storage = []
  }
  globalThis.__smidigflytt_storage.unshift(message)
  console.log(`Message added to global storage: ${message.type} - ${message.id}`)
  console.log(`Total messages in storage: ${globalThis.__smidigflytt_storage.length}`)
}

export function getAllMessages(): BaseMessage[] {
  if (!globalThis.__smidigflytt_storage) {
    globalThis.__smidigflytt_storage = []
  }
  return [...globalThis.__smidigflytt_storage]
}

export function getMessagesByType(type: string): BaseMessage[] {
  if (!globalThis.__smidigflytt_storage) {
    return []
  }
  return globalThis.__smidigflytt_storage.filter(msg => msg.type === type)
}

export function clearAllMessages() {
  globalThis.__smidigflytt_storage = []
}

// Export for debugging
export function getStorageInfo() {
  return {
    initialized: !!globalThis.__smidigflytt_storage,
    messageCount: globalThis.__smidigflytt_storage?.length || 0,
    messages: globalThis.__smidigflytt_storage || []
  }
}
