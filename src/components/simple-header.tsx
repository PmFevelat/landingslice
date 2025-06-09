import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

const menuItems = [
    { name: 'Features', href: '#link' },
    { name: 'Pricing', href: '#link' },
    { name: 'About', href: '#link' },
]

export function SimpleHeader() {
    return (
        <header>
            <nav className="fixed z-20 w-full transition-all duration-300 bg-background/75 border-b border-black/5 backdrop-blur-lg">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="relative flex items-center justify-between py-3">
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2">
                            <Logo />
                        </Link>

                        <div className="hidden lg:block">
                            <ul className="flex gap-1">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Button
                                            asChild
                                            variant="ghost"
                                            size="sm">
                                            <Link
                                                href={item.href}
                                                className="text-base">
                                                <span>{item.name}</span>
                                            </Link>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="hidden lg:flex lg:gap-6">
                            <Button
                                asChild
                                size="sm">
                                <Link href="/waitlist">
                                    <span>Join waitlist</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
} 