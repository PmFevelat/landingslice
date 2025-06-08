import { cn } from '../lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-3', className)}>
            <Image
                src="/images/logo.png"
                alt="Slice logo"
                width={40}
                height={40}
                className="w-10 h-10"
            />
            <span className="text-2xl font-semibold font-[family-name:var(--font-plus-jakarta-sans)]">
                Slice
            </span>
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/images/logo.png"
            alt="Slice logo"
            width={40}
            height={40}
            className={cn('w-10 h-10', className)}
        />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-3', className)}>
            <Image
                src="/images/logo.png"
                alt="Slice logo"
                width={36}
                height={36}
                className="w-9 h-9"
            />
            <span className="text-xl font-semibold font-[family-name:var(--font-plus-jakarta-sans)]">
                Slice
            </span>
        </div>
    )
}
