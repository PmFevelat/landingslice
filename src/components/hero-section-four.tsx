import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SimpleHeader } from './simple-header'


export default function HeroSection() {
    return (
        <>
            <SimpleHeader />
            <main className="[--color-primary:var(--color-indigo-500)]">
                <section className="overflow-hidden">
                    <div className="py-20 md:py-36">
                        <div className="relative z-10 mx-auto max-w-5xl px-6">
                            <div className="relative text-center">
                                <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold md:text-5xl">Stop chasing answers from internal teams</h1>

                                <p className="text-muted-foreground mx-auto my-6 max-w-6xl text-balance text-xl">Slice turns sales calls into structured workflows — with answers, follow-ups, and team actions ready to go.</p>

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

                            <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl bg-black/10 md:mt-20">
                                <img
                                    src="/images/bakcground2.png"
                                    alt="Background image"
                                    className="absolute inset-0 size-full object-cover"
                                />

                                <div className="bg-background rounded-(--radius) relative m-4 overflow-hidden border border-transparent shadow-xl shadow-black/15 ring-1 ring-black/10 sm:m-8 md:m-12">
                                    <img
                                        src="/images/heroscreen.png"
                                        alt="Slice application interface"
                                        className="w-full h-full object-cover block"
                                    />
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
