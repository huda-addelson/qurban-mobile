// Format tag ID: #JD-0931
export function formatTagId(id: string | number): string {
  const numericId = typeof id === 'string' ? id.replace(/\D/g, '') : String(id)
  return `#JD-${numericId.padStart(4, '0')}`
}

// Format date in Indonesian locale
export function formatDate(date: Date | string, style: 'short' | 'medium' | 'long' = 'medium'): string {
  const d = typeof date === 'string' ? new Date(date) : date
  
  const options: Intl.DateTimeFormatOptions = {
    short: { day: 'numeric', month: 'short' },
    medium: { day: 'numeric', month: 'long', year: 'numeric' },
    long: { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' },
  }[style]
  
  return new Intl.DateTimeFormat('id-ID', options).format(d)
}

// Format time
export function formatTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('id-ID', { 
    hour: '2-digit', 
    minute: '2-digit' 
  }).format(d)
}

// Format date and time
export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return `${formatDate(d, 'short')} \u00B7 ${formatTime(d)}`
}

// Format weight
export function formatWeight(kg: number): string {
  return `${kg} kg`
}

// Format relative time (e.g., "2 jam lalu")
export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)
  
  if (diffMins < 1) return 'Baru saja'
  if (diffMins < 60) return `${diffMins} menit lalu`
  if (diffHours < 24) return `${diffHours} jam lalu`
  if (diffDays < 7) return `${diffDays} hari lalu`
  
  return formatDate(d, 'short')
}
