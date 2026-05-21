'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BottomNav, JedagBadge, JedagCard, CardBody, JedagChip, SearchInput } from '@/components/jedag';
import { ArrowLeft, Filter, Clock, MapPin } from 'lucide-react';
import { formatRelativeTime } from '@/lib/format';

const jejaks = [
    {
        id: 'JD-0931',
        name: 'Barokah',
        species: 'Sapi Limousin',
        weight: 380,
        status: 'on_the_way',
        progress: 3,
        totalSteps: 7,
        badges: ['syariah', 'sehat'],
        liveTracking: true,
        lastUpdate: new Date(Date.now() - 2 * 60 * 60 * 1000),
        location: 'Malang',
        image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400&h=300&fit=crop'
    },
    {
        id: 'JD-0847',
        name: 'Sakinah',
        species: 'Kambing Etawa',
        weight: 45,
        status: 'at_farm',
        progress: 1,
        totalSteps: 7,
        badges: ['sehat'],
        liveTracking: false,
        lastUpdate: new Date(Date.now() - 24 * 60 * 60 * 1000),
        location: 'Pasuruan',
        image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=400&h=300&fit=crop'
    },
    {
        id: 'JD-0756',
        name: 'Berkah',
        species: 'Sapi Brahman',
        weight: 420,
        status: 'completed',
        progress: 7,
        totalSteps: 7,
        badges: ['syariah', 'sehat'],
        liveTracking: false,
        lastUpdate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        location: 'Surabaya',
        image: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=400&h=300&fit=crop'
    }
];

const statusLabels: Record<string, { label: string; color: string }> = {
    at_farm: { label: 'Di Peternakan', color: 'bg-gold-100 text-gold-700' },
    on_the_way: { label: 'Sedang Diantar', color: 'bg-emerald-100 text-emerald-700' },
    slaughter: { label: 'Proses Sembelih', color: 'bg-leaf-100 text-leaf-700' },
    distribution: { label: 'Distribusi', color: 'bg-forest-100 text-forest-700' },
    completed: { label: 'Selesai', color: 'bg-ink-100 text-ink-700' }
};

export default function JejakListPage() {
    return (
        <div className="min-h-screen bg-off-white pb-24">
            {/* Header */}
            <header className="bg-white border-b border-ink-100 pt-[env(safe-area-inset-top)] px-5 pb-4">
                <div className="flex items-center gap-4 mb-4">
                    <Link href="/home" className="p-2 -ml-2 rounded-full hover:bg-ink-100 transition-colors">
                        <ArrowLeft className="h-5 w-5 text-ink-700" strokeWidth={1.75} />
                    </Link>
                    <h1 className="text-xl font-bold text-ink-900">Jejak Daging</h1>
                </div>

                <div className="flex gap-3">
                    <div className="flex-1">
                        <SearchInput placeholder="Cari ID atau nama..." />
                    </div>
                    <button className="h-12 w-12 flex items-center justify-center bg-ink-100 rounded-xl hover:bg-ink-200 transition-colors">
                        <Filter className="h-5 w-5 text-ink-700" strokeWidth={1.75} />
                    </button>
                </div>
            </header>

            {/* Filter Chips */}
            <div className="px-5 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
                <JedagChip variant="solid">Semua</JedagChip>
                <JedagChip variant="default">Dalam Perjalanan</JedagChip>
                <JedagChip variant="default">Di Peternakan</JedagChip>
                <JedagChip variant="default">Selesai</JedagChip>
            </div>

            {/* Jejak List */}
            <section className="px-5 space-y-3 flex flex-col mt-3">
                {jejaks.map((jejak) => {
                    const status = statusLabels[jejak.status];

                    return (
                        <Link key={jejak.id} href={`/jejak/${jejak.id}`}>
                            <JedagCard className="press-feedback">
                                <div className="flex gap-4 p-4">
                                    {/* Image */}
                                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                                        <Image src={jejak.image} alt={jejak.name} fill className="object-cover" />
                                        {jejak.liveTracking && (
                                            <div className="absolute top-1.5 left-1.5">
                                                <JedagBadge variant="live" size="sm">
                                                    LIVE
                                                </JedagBadge>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2 mb-1">
                                            <div>
                                                <p className="text-xs text-ink-500 font-mono">{jejak.id}</p>
                                                <h3 className="font-semibold text-ink-900">{`"${jejak.name}"`}</h3>
                                            </div>
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold shrink-0 ${status.color}`}>
                                                {status.label}
                                            </span>
                                        </div>

                                        <p className="text-sm text-ink-500 mb-2">
                                            {jejak.species} &middot; {jejak.weight} kg
                                        </p>

                                        <div className="flex items-center gap-3 text-xs text-ink-500">
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                                                {formatRelativeTime(jejak.lastUpdate)}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
                                                {jejak.location}
                                            </span>
                                        </div>

                                        {/* Progress */}
                                        <div className="mt-2 flex items-center gap-2">
                                            <div className="flex-1 h-1.5 bg-ink-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-emerald-500 rounded-full"
                                                    style={{ width: `${(jejak.progress / jejak.totalSteps) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-xs text-ink-500">
                                                {jejak.progress}/{jejak.totalSteps}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </JedagCard>
                        </Link>
                    );
                })}
            </section>

            <BottomNav />
        </div>
    );
}
