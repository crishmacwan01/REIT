import { InstrumentChart } from "@/components/features/InstrumentChart"
import { PricePanel } from "@/components/features/PricePanel"
import { OrderCard } from "@/components/features/OrderCard"
import { FundamentalsTable } from "@/components/features/FundamentalsTable"
import { MOCK_INSTRUMENTS } from "@/lib/mock-data"
import { notFound } from "next/navigation"

interface PageProps {
    params: Promise<{ symbol: string }>
}

export default async function InstrumentPage({ params }: PageProps) {
    const { symbol } = await params
    const instrument = MOCK_INSTRUMENTS.find((i) => i.symbol === symbol) || MOCK_INSTRUMENTS[0]

    if (!instrument) {
        return notFound()
    }

    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <h1 className="text-2xl font-bold text-primary">{instrument.name}</h1>
                        <div className="text-sm text-muted-foreground">{instrument.symbol} • {instrument.type}</div>
                    </div>

                    <PricePanel
                        price={instrument.lastPrice}
                        change={instrument.change}
                        changePercent={instrument.changePercent}
                    />

                    <InstrumentChart />

                    <FundamentalsTable />
                </div>

                <div className="space-y-6">
                    <OrderCard symbol={instrument.symbol} price={instrument.lastPrice} />

                    <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
                        <h3 className="font-semibold mb-4">About {instrument.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {instrument.name} is a leading {instrument.type} in India, focused on owning and operating high-quality assets.
                            The portfolio consists of Grade A office parks and retail spaces across major Indian cities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
