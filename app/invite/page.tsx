'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  BottomNav, 
  JedagButton, 
  JedagCard, 
  CardBody,
  JedagInput,
  JedagAvatar,
  AvatarGroup
} from '@/components/jedag'
import { 
  ArrowLeft, 
  UserPlus,
  Copy,
  Share2,
  Check,
  Mail
} from 'lucide-react'

const invitedMembers = [
  { name: 'Siti Aminah', email: 'siti@email.com', status: 'accepted' },
  { name: 'Budi Santoso', email: 'budi@email.com', status: 'pending' },
  { name: 'Dewi Lestari', email: 'dewi@email.com', status: 'accepted' },
]

export default function FamilyInvitePage() {
  const [email, setEmail] = useState('')
  const [copied, setCopied] = useState(false)
  const inviteLink = 'https://jedag.id/invite/JD-0931-FAM'

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-off-white pb-24">
      {/* Header */}
      <header className="bg-emerald-700 text-white pt-[env(safe-area-inset-top)] pb-8 px-5">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/jejak/JD-0931" className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
            <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
          </Link>
          <h1 className="text-xl font-bold">Undang Keluarga</h1>
        </div>
        
        <p className="text-emerald-100">
          Ajak anggota keluarga untuk memantau perjalanan qurban &quot;Barokah&quot; bersama-sama
        </p>
      </header>

      <div className="px-5 -mt-4 space-y-4">
        {/* Share Link Card */}
        <JedagCard>
          <CardBody className="space-y-4">
            <h3 className="font-semibold text-ink-900">Link Undangan</h3>
            
            <div className="flex gap-2">
              <div className="flex-1 bg-ink-100 rounded-xl px-4 py-3 text-sm text-ink-700 font-mono truncate">
                {inviteLink}
              </div>
              <button
                onClick={handleCopy}
                className="h-12 w-12 shrink-0 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 hover:bg-emerald-200 transition-colors"
              >
                {copied ? (
                  <Check className="h-5 w-5" strokeWidth={1.75} />
                ) : (
                  <Copy className="h-5 w-5" strokeWidth={1.75} />
                )}
              </button>
            </div>
            
            <JedagButton variant="secondary" fullWidth>
              <Share2 className="h-5 w-5" strokeWidth={1.75} />
              Bagikan Link
            </JedagButton>
          </CardBody>
        </JedagCard>

        {/* Invite by Email */}
        <JedagCard>
          <CardBody className="space-y-4">
            <h3 className="font-semibold text-ink-900">Undang via Email</h3>
            
            <div className="flex gap-2">
              <JedagInput
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                leadingIcon={<Mail className="h-5 w-5" />}
                className="flex-1"
              />
              <JedagButton disabled={!email}>
                <UserPlus className="h-5 w-5" strokeWidth={1.75} />
              </JedagButton>
            </div>
          </CardBody>
        </JedagCard>

        {/* Invited Members */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-ink-900">Anggota Keluarga</h3>
            <span className="text-sm text-ink-500">{invitedMembers.length} orang</span>
          </div>
          
          <JedagCard>
            <div className="divide-y divide-ink-100">
              {invitedMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-3 p-4">
                  <JedagAvatar 
                    fallback={member.name}
                    size="md"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-ink-900 truncate">{member.name}</p>
                    <p className="text-sm text-ink-500 truncate">{member.email}</p>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    member.status === 'accepted' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-gold-100 text-gold-700'
                  }`}>
                    {member.status === 'accepted' ? 'Bergabung' : 'Menunggu'}
                  </span>
                </div>
              ))}
            </div>
          </JedagCard>
        </div>

        {/* Info */}
        <div className="bg-emerald-50 rounded-xl p-4">
          <p className="text-sm text-emerald-700">
            Anggota yang diundang dapat melihat status dan lokasi qurban secara real-time, 
            namun tidak dapat mengubah pengaturan.
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
