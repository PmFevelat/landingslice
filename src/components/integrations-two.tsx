// import { Button } from '@/components/ui/button'
// import Link from 'next/link'
import Image from 'next/image'

export default function Integrations() {
    const integrationLogos = [
        { name: 'Gmail', src: '/images/logos/logos integrations/Gmail.png' },
        { name: 'Outlook', src: '/images/logos/logos integrations/Outlook.png' },
        { name: 'Slack', src: '/images/logos/logos integrations/slack.png' },
        { name: 'Teams', src: '/images/logos/logos integrations/Teams.png' },
        { name: 'Notion', src: '/images/logos/logos integrations/notion.png' },
        { name: 'Drive', src: '/images/logos/logos integrations/Drive.png' },
        { name: 'Gong', src: '/images/logos/logos integrations/Gong.png' },
        { name: 'GM', src: '/images/logos/logos integrations/GM.png' },
    ]

    return (
        <section>
            <div className="mx-auto max-w-5xl px-6 py-8">
                <div className="space-y-6 text-center">
                    <h2 className="text-foreground text-2xl font-semibold">Integrate with your favorite tools : </h2>
                    <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-1">
                        {integrationLogos.map((logo, index) => (
                            <div 
                                key={index}
                                className="bg-foreground/5 rounded p-6 flex items-center justify-center min-w-[80px] h-16"
                            >
                                <Image
                                    src={logo.src}
                                    alt={`${logo.name} logo`}
                                    width={32}
                                    height={32}
                                    className={logo.name === 'GM' ? "w-10 h-10 object-contain" : "w-8 h-8 object-contain"}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
