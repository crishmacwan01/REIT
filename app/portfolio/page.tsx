import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PortfolioSummary } from "@/components/features/PortfolioSummary"
import { HoldingsTable, HoldingItem } from "@/components/features/HoldingsTable"
import { getPortfolios } from "@/app/actions/portfolio"
import { getMarketData } from "@/app/actions/market"

export default async function PortfolioPage() {
    const portfolios = await getPortfolios()

    // Flatten all portfolio items and fetch market data
    const allItems: HoldingItem[] = []
    let totalValue = 0
    let totalInvested = 0
    let dayGain = 0

    for (const portfolio of portfolios) {
        for (const item of portfolio.items) {
            const marketData = await getMarketData(item.instrument.symbol)
            const currentPrice = marketData.price
            const marketValue = item.quantity * currentPrice
            const investedValue = item.quantity * item.averagePrice
            const pnl = marketValue - investedValue
            const pnlPercent = (pnl / investedValue) * 100

            // Day change calculation approximation
            const dayChangeAmount = currentPrice * (marketData.changePercent / 100) * item.quantity
            dayGain += dayChangeAmount

            totalValue += marketValue
            totalInvested += investedValue

            allItems.push({
                symbol: item.instrument.symbol,
                name: item.instrument.name,
                qty: item.quantity,
                avgCost: item.averagePrice,
                lastPrice: currentPrice,
                dayChange: marketData.changePercent,
                marketValue: marketValue,
                pnl: pnl,
                pnlPercent: pnlPercent,
            })
        }
    }

    const totalGain = totalValue - totalInvested
    const totalGainPercent = totalInvested > 0 ? (totalGain / totalInvested) * 100 : 0
    const dayGainPercent = totalValue > 0 ? (dayGain / totalValue) * 100 : 0 // Approx

    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-col gap-2 mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-primary">My Portfolio</h1>
                <p className="text-muted-foreground">
                    Track your investments and performance.
                </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8 flex items-center justify-between">
                <div>
                    <h3 className="font-semibold text-primary">Complete your profile</h3>
                    <p className="text-sm text-muted-foreground">Open a Demat account to start trading REITs instantly.</p>
                </div>
                <Button asChild>
                    <Link href="/open-demat">Open Demat Account</Link>
                </Button>
            </div>

            <PortfolioSummary
                totalValue={totalValue}
                totalGain={totalGain}
                totalGainPercent={totalGainPercent}
                dayGain={dayGain}
                dayGainPercent={dayGainPercent}
                dividendYield={0} // Not implemented yet
            />
            <HoldingsTable holdings={allItems} />
        </div>
    )
}
