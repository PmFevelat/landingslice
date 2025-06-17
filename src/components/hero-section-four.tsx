"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SimpleHeader } from './simple-header'


export default function HeroSection() {
    const [showVideo, setShowVideo] = useState(false)
    const youtubeVideoId = "u8V4SrW4NWI" // ID de la vidéo de démo Slice
    return (
        <>
            <SimpleHeader />
            <main className="[--color-primary:var(--color-indigo-500)]">
                <section className="overflow-hidden">
                    <div className="py-20 md:py-36">
                        <div className="relative z-10 mx-auto max-w-5xl px-6">
                            <div className="relative text-center">
                                <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold md:text-5xl">Turn meeting transcripts into signals you can act on</h1>

                                <p className="text-muted-foreground mx-auto my-6 max-w-6xl text-balance text-xl">Slice turns every sales conversation into ready-to-launch workflows — with follow-ups, answers, and internal actions pre-drafted.</p>

                                <div className="flex justify-center">
                                    <Button
                                        asChild
                                        size="lg">
                                        <Link href="/waitlist">
                                            <span className="text-nowrap">Join the waitlist</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Video Modal */}
                            {showVideo && (
                                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                                    <div className="relative w-full max-w-4xl aspect-video">
                                        <button
                                            onClick={() => setShowVideo(false)}
                                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                                        >
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                        <iframe
                                            className="w-full h-full rounded-xl"
                                            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                                            title="Demo vidéo Slice"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl bg-black/10 md:mt-20">
                                <img
                                    src="/images/bakcground2.png"
                                    alt="Background image"
                                    className="absolute inset-0 size-full object-cover"
                                />

                                <div 
                                    className="bg-background rounded-(--radius) relative m-4 overflow-hidden border border-transparent shadow-xl shadow-black/15 ring-1 ring-black/10 sm:m-8 md:m-12 cursor-pointer group transition-transform hover:scale-[1.02]"
                                    onClick={() => setShowVideo(true)}
                                >
                                    {/* YouTube Thumbnail */}
                                    <img
                                        src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                                        alt="Démo vidéo Slice - Cliquez pour voir"
                                        className="w-full h-full object-cover block"
                                    />
                                    
                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                            <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Demo label */}
                                    <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        📹 Voir la démo
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <p className="text-muted-foreground text-center">Backed by :</p>
                                <div className="mt-4 flex items-center justify-center gap-12 max-w-4xl mx-auto">
                                    <div className="flex items-center justify-center min-w-[140px]">
                                        <img
                                            className="h-10 w-auto"
                                            src="/images/logos/StationF.png"
                                            alt="Station F Logo"
                                            height="40"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center min-w-[160px]">
                                        <img
                                            className="h-16 w-auto"
                                            src="/images/logos/hecincubateur.png"
                                            alt="HEC Incubateur Logo"
                                            height="64"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center min-w-[120px]">
                                        <img
                                            className="h-16 w-auto"
                                            src="/images/logos/X.png"
                                            alt="X Logo"
                                            height="64"
                                            width="auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
