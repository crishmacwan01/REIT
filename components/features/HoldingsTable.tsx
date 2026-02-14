"use client"

import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const MOCK_HOLDINGS = [
    {
        symbol: "INDSHOP",
        name: "India Shopping REIT",
        qty: 150,
        avgCost: 210.00,
        lastPrice: 237.50,
        dayChange: -0.48,
        marketValue: 35625.00,
        pnl: 4125.00,
        pnlPercent: 13.1,
    },
    {
        symbol: "LOGEIT",
        name: "Logistics EIT Trust",
        qty: 50,
        avgCost: 380.00,
        lastPrice: 412.00,
        dayChange: 1.12,
        marketValue: 20600.00,
        pnl: 1600.00,
        pnlPercent: 8.4,
    },
    {
        symbol: "OFFICER",
        name: "Prime Office REIT",
        qty: 200,
        avgCost: 300.00,
        lastPrice: 315.20,
        dayChange: 0.38,
        marketValue: 63040.00,
        pnl: 3040.00,
        pnlPercent: 5.1,
    },
]

export interface HoldingItem {
    symbol: string
    name: string
    qty: number
    avgCost: number
    lastPrice: number
    dayChange: number
    marketValue: number
    pnl: number
    pnlPercent: number
}

interface HoldingsTableProps {
    holdings: HoldingItem[]
}

export function HoldingsTable({ holdings = [] }: HoldingsTableProps) {
    if (holdings.length === 0) {
        return (
            <div className="rounded-md border bg-card p-8 text-center text-muted-foreground">
                <p>No holdings found. Start by adding instruments to your portfolio.</p>
                <div className="mt-4">
                    <Button variant="outline" asChild>
                        <Link href="/market">Explore Market</Link>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="rounded-md border bg-card">
            <div className="p-6 border-b">
                <h3 className="font-semibold">Your Holdings</h3>
            </div>
            <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Symbol</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Qty</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Avg. Cost</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">LTP</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Cur. Value</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">P&L</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Net Chg%</th>
                        </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                        {holdings.map((item) => (
                            <tr
                                key={item.symbol}
                                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                            >
                                <td className="p-4 align-middle font-medium">
                                    <Link href={`/instrument/${item.symbol}`} className="hover:underline text-primary">
                                        {item.symbol}
                                    </Link>
                                    <div className="text-xs text-muted-foreground">{item.name}</div>
                                </td>
                                <td className="p-4 align-middle text-right">{item.qty}</td>
                                <td className="p-4 align-middle text-right">₹{item.avgCost.toFixed(2)}</td>
                                <td className="p-4 align-middle text-right">
                                    ₹{item.lastPrice.toFixed(2)}
                                    <div className={cn("text-xs", item.dayChange >= 0 ? "text-green-600" : "text-red-600")}>
                                        {item.dayChange > 0 ? "+" : ""}{item.dayChange}%
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-right font-medium">₹{item.marketValue?.toLocaleString('en-IN')}</td>
                                <td className={cn("p-4 align-middle text-right font-medium", item.pnl >= 0 ? "text-green-600" : "text-red-600")}>
                                    {item.pnl > 0 ? "+" : ""}₹{item.pnl?.toLocaleString('en-IN')}
                                </td>
                                <td className={cn("p-4 align-middle text-right", item.pnlPercent >= 0 ? "text-green-600" : "text-red-600")}>
                                    <div className="flex items-center justify-end">
                                        {item.pnlPercent >= 0 ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
                                        {Math.abs(item.pnlPercent || 0).toFixed(2)}%
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
