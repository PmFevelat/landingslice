// import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function Features() {
    return (
        <section>
            <div className="bg-muted/50 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground text-4xl font-semibold">Build once. Run every time.</h2>
                        <h3 className="text-foreground text-2xl font-semibold mt-6">Customize your workflow, your way</h3>
                        <p className="text-muted-foreground mb-12 mt-4 text-lg">Summaries, extracted questions, internal & web searches, and automated follow-ups. Drag & drop to build the perfect workflow.</p>
                        <div className="bg-foreground/5 rounded-3xl p-6">
                            <Image
                                src="/images/data.png"
                                alt="Workflow customization interface"
                                width={800}
                                height={400}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="mt-16">
                        <div className="text-right">
                            <h3 className="text-foreground text-2xl font-semibold">Approve and act—from a single table</h3>
                            <p className="text-muted-foreground mb-12 mt-4 text-lg">Each call lands in a single table. Edit, approve, or decline any block, and Slice triggers the next step automatically.</p>
                        </div>
                        <div className="bg-foreground/5 rounded-3xl p-6">
                            <Image
                                src="/images/table.png"
                                alt="Single table interface"
                                width={800}
                                height={400}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-foreground text-4xl font-semibold">Stop chasing answers from internal teams</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-lg">Assign tasks to internal teams in one click — with pre-written messages, auto-reminders, and full visibility across deal progress.</p>
                        <div className="bg-foreground/5 rounded-3xl p-6">
                            <Image
                                src="/images/tasks.png"
                                alt="Internal teams task management interface"
                                width={800}
                                height={400}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-foreground text-4xl font-semibold">Go beyond meetings. Deliver moments.</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-lg">Slice allows you to surface the little things — like your client's passion for tennis — and gives you the tools to act on them creatively: search web, attach content, make it personal.</p>
                        <div className="bg-foreground/5 rounded-3xl p-6">
                            <Image
                                src="/images/personalised.png"
                                alt="Personalized moments interface"
                                width={800}
                                height={400}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-foreground text-4xl font-semibold">What Slice lets you do</h2>
                    </div>

                    <div className="border-foreground/10 relative mt-16 grid gap-12 border-b pb-12 [--radius:1rem] md:grid-cols-2">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Summarize calls from every angle</h3>
                            <p className="text-muted-foreground my-4 text-base">Internal summaries, client-friendly recaps, action items—ready to review or send instantly.</p>
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
                                        src="/images/angle.png"
                                        alt="Call summarization from every angle interface"
                                        width={400}
                                        height={225}
                                        className="w-full h-full object-cover rounded-tl-lg rounded-br-none border-l border-t border-gray-300/30 shadow-lg opacity-95"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Search across docs, FAQs, or the web</h3>
                            <p className="text-muted-foreground my-4 text-base">Use internal and external search nodes to enrich your follow-up with the best answers — and turn objections into opportunities.</p>
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
                                        src="/images/test4.png"
                                        alt="Search across docs and web interface"
                                        width={400}
                                        height={225}
                                        className="w-full h-full object-cover rounded-tl-lg rounded-br-none border-l border-t border-gray-300/30 shadow-lg opacity-95"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Generate personalized messages in seconds</h3>
                            <p className="text-muted-foreground my-4 text-base">From client follow-ups to team alerts — Slice turns insights into well-crafted, editable messages with auto-reminders and status tracking</p>
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
                                        src="/images/mailing.png"
                                        alt="Personalized messaging interface"
                                        width={400}
                                        height={225}
                                        className="w-full h-full object-cover rounded-tl-lg rounded-br-none border-l border-t border-gray-300/30 shadow-lg opacity-95"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Sync every step with your CRM</h3>
                            <p className="text-muted-foreground my-4 text-base">Map outputs to CRM fields automatically — client questions, meeting notes, objections, next steps… everything in the right place.</p>
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
                                        src="/images/crm.png"
                                        alt="CRM synchronization interface"
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
