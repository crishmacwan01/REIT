"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { MOCK_INSTRUMENTS } from "@/lib/mock-data"

export function Ticker() {
    const [instruments, setInstruments] = useState(MOCK_INSTRUMENTS)

    // Simulate live price updates
    useEffect(() => {
        const interval = setInterval(() => {
            setInstruments((prev) =>
                prev.map((item) => ({
                    ...item,
                    lastPrice: item.lastPrice + (Math.random() - 0.5) * 2,
                    changePercent: item.changePercent + (Math.random() - 0.5) * 0.1,
                }))
            )
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full bg-muted/30 border-b overflow-hidden py-2">
            <div className="animate-ticker flex whitespace-nowrap">
                {[...instruments, ...instruments].map((item, i) => (
                    <div key={`${item.symbol}-${i}`} className="inline-flex items-center mx-6">
                        <span className="font-semibold text-sm mr-2">{item.symbol}</span>
                        <span className="text-sm mr-2">₹{item.lastPrice.toFixed(2)}</span>
                        <span
                            className={cn(
                                "text-xs flex items-center",
                                item.changePercent >= 0 ? "text-green-600" : "text-red-600"
                            )}
                        >
                            {item.changePercent >= 0 ? (
                                <ArrowUpRight className="h-3 w-3 mr-0.5" />
                            ) : (
                                <ArrowDownRight className="h-3 w-3 mr-0.5" />
                            )}
                            {Math.abs(item.changePercent).toFixed(2)}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
