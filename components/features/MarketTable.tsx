"use client"

import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MOCK_INSTRUMENTS } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function MarketTable() {
    return (
        <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Symbol</th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Price</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Change</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">% Change</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Volume</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Yield</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Action</th>
                        </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                        {MOCK_INSTRUMENTS.map((item) => (
                            <tr
                                key={item.symbol}
                                className="border-b transition-all hover:bg-muted/50 data-[state=selected]:bg-muted hover:scale-[1.01] duration-200"
                            >
                                <td className="p-4 align-middle font-medium">
                                    <Link href={`/instrument/${item.symbol}`} className="hover:underline text-primary">
                                        {item.symbol}
                                    </Link>
                                </td>
                                <td className="p-4 align-middle">{item.name}</td>
                                <td className="p-4 align-middle text-right">₹{item.lastPrice.toFixed(2)}</td>
                                <td className={cn("p-4 align-middle text-right", item.change >= 0 ? "text-green-600" : "text-red-600")}>
                                    {item.change > 0 ? "+" : ""}{item.change.toFixed(2)}
                                </td>
                                <td className={cn("p-4 align-middle text-right", item.changePercent >= 0 ? "text-green-600" : "text-red-600")}>
                                    <div className="flex items-center justify-end">
                                        {item.changePercent >= 0 ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
                                        {Math.abs(item.changePercent).toFixed(2)}%
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-right">{item.volume.toLocaleString()}</td>
                                <td className="p-4 align-middle text-right">{item.yield}%</td>
                                <td className="p-4 align-middle text-right">
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Actions</span>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
