import { Hero } from "@/components/features/Hero"
import { MarketSnapshot } from "@/components/features/MarketSnapshot"
import { Ticker } from "@/components/features/Ticker"

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Ticker />
            <Hero />
            <MarketSnapshot />
        </div>
    )
}
