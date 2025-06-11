// import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function Features() {
    return (
        <section>
            <div className="bg-muted/50 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground text-4xl font-semibold">Every call structured your way — ready to act</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">Slice breaks each call transcription into building blocks you define—so you can review, validate, and move faster.</p>
                        <div className="bg-foreground/5 rounded-3xl p-6">
                            <Image
                                src="/images/tabless.png"
                                alt="Task management interface"
                                width={800}
                                height={400}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="mt-16">
                        <div className="text-right">
                            <h2 className="text-foreground text-4xl font-semibold">Every call structured your way — ready to act</h2>
                            <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">Slice breaks each call transcription into building blocks you define—so you can review, validate, and move faster.</p>
                        </div>
                        <div className="bg-foreground/5 rounded-3xl p-6">
                            <Image
                                src="/images/tabless.png"
                                alt="Task management interface"
                                width={800}
                                height={400}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-foreground text-4xl font-semibold">Every call structured your way — ready to act</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">Slice breaks each call transcription into building blocks you define—so you can review, validate, and move faster.</p>
                        <div className="bg-foreground/5 rounded-3xl p-6">
                            <Image
                                src="/images/tabless.png"
                                alt="Task management interface"
                                width={800}
                                height={400}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="border-foreground/10 relative mt-16 grid gap-12 border-b pb-12 [--radius:1rem] md:grid-cols-2">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Find the right answer before even asking</h3>
                            <p className="text-muted-foreground my-4 text-lg">Slice brings you the most relevant docs and insights to answer clients&apos; questions.</p>
                            <div className="aspect-video overflow-hidden rounded-xl p-4 relative">
                                <Image
                                    src="/images/grid/jaune.png"
                                    alt="Background interface"
                                    width={600}
                                    height={337}
                                    className="w-full h-full object-cover absolute inset-0"
                                />
                                <div className="absolute bottom-0 right-0 w-11/12 h-11/12 z-10">
                                    <Image
                                        src="/images/resourcess.png"
                                        alt="Marketing campaigns interface"
                                        width={400}
                                        height={225}
                                        className="w-full h-full object-cover rounded-tl-lg rounded-br-none border-l border-t border-gray-300/30 shadow-lg opacity-95"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Assign and track internal work</h3>
                            <p className="text-muted-foreground my-4 text-lg">Slice sends the messages and follows up with internal teams, so you don&apos;t have to.</p>
                            <div className="aspect-video overflow-hidden rounded-xl p-4 relative">
                                <Image
                                    src="/images/grid/violet.png"
                                    alt="Background interface"
                                    width={600}
                                    height={337}
                                    className="w-full h-full object-cover absolute inset-0"
                                />
                                <div className="absolute bottom-0 right-0 w-11/12 h-11/12 z-10">
                                    <Image
                                        src="/images/steps.png"
                                        alt="AI meeting scheduler interface"
                                        width={400}
                                        height={225}
                                        className="w-full h-full object-cover rounded-tl-lg rounded-br-none border-l border-t border-gray-300/30 shadow-lg opacity-95"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Find the right answer before even asking</h3>
                            <p className="text-muted-foreground my-4 text-lg">Slice brings you the most relevant docs and insights to answer clients&apos; questions.</p>
                            <div className="aspect-video overflow-hidden rounded-xl p-4 relative">
                                <Image
                                    src="/images/grid/rose.png"
                                    alt="Background interface"
                                    width={600}
                                    height={337}
                                    className="w-full h-full object-cover absolute inset-0"
                                />
                                <div className="absolute bottom-0 right-0 w-11/12 h-11/12 z-10">
                                    <Image
                                        src="/images/resourcess.png"
                                        alt="Marketing campaigns interface"
                                        width={400}
                                        height={225}
                                        className="w-full h-full object-cover rounded-tl-lg rounded-br-none border-l border-t border-gray-300/30 shadow-lg opacity-95"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Assign and track internal work</h3>
                            <p className="text-muted-foreground my-4 text-lg">Slice sends the messages and follows up with internal teams, so you don&apos;t have to.</p>
                            <div className="aspect-video overflow-hidden rounded-xl p-4 relative">
                                <Image
                                    src="/images/grid/orange.png"
                                    alt="Background interface"
                                    width={600}
                                    height={337}
                                    className="w-full h-full object-cover absolute inset-0"
                                />
                                <div className="absolute bottom-0 right-0 w-11/12 h-11/12 z-10">
                                    <Image
                                        src="/images/steps.png"
                                        alt="AI meeting scheduler interface"
                                        width={400}
                                        height={225}
                                        className="w-full h-full object-cover rounded-tl-lg rounded-br-none border-l border-t border-gray-300/30 shadow-lg opacity-95"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
