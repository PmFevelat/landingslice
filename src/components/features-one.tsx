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

                    <div className="border-foreground/10 relative mt-16 grid gap-12 border-b pb-12 [--radius:1rem] md:grid-cols-2">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Find the right answer before even asking</h3>
                            <p className="text-muted-foreground my-4 text-lg">Slice brings you the most relevant docs and insights to answer clients&apos; questions.</p>
                            <div className="aspect-video overflow-hidden bg-foreground/5 rounded-xl p-4">
                                <Image
                                    src="/images/resourcess.png"
                                    alt="Marketing campaigns interface"
                                    width={400}
                                    height={225}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Assign and track internal work</h3>
                            <p className="text-muted-foreground my-4 text-lg">Slice sends the messages and follows up with internal teams, so you don&apos;t have to.</p>
                            <div className="aspect-video overflow-hidden bg-foreground/5 rounded-xl p-4">
                                <Image
                                    src="/images/steps.png"
                                    alt="AI meeting scheduler interface"
                                    width={400}
                                    height={225}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
