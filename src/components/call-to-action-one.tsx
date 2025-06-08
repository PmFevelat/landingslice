import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function StatsSection() {
    return (
        <section>
            <div className="py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="space-y-6 text-center">
                        <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">Ready to give every call a second brain?</h2>
                        <div className="flex justify-center">
                            <Button
                                asChild
                                size="lg">
                                <Link href="#">Join the waitlist</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
