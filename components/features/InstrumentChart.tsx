"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const data = [
    { time: "09:30", price: 235.5 },
    { time: "10:00", price: 236.2 },
    { time: "10:30", price: 235.8 },
    { time: "11:00", price: 237.1 },
    { time: "11:30", price: 236.9 },
    { time: "12:00", price: 237.5 },
    { time: "12:30", price: 238.2 },
    { time: "13:00", price: 237.8 },
    { time: "13:30", price: 238.5 },
    { time: "14:00", price: 239.1 },
    { time: "14:30", price: 238.8 },
    { time: "15:00", price: 239.5 },
    { time: "15:30", price: 240.0 },
]

export function InstrumentChart() {
    const [timeframe, setTimeframe] = useState("1D")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="h-[500px] w-full bg-muted/10 animate-pulse rounded-xl" />

    return (
        <Card className="h-[500px] flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">Price Chart</CardTitle>
                <div className="flex gap-1">
                    {["1D", "1W", "1M", "1Y", "ALL"].map((tf) => (
                        <Button
                            key={tf}
                            variant={timeframe === tf ? "secondary" : "ghost"}
                            size="sm"
                            onClick={() => setTimeframe(tf)}
                            className="h-7 px-2 text-xs"
                        >
                            {tf}
                        </Button>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#153B50" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#153B50" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis
                            dataKey="time"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: "#6b7280" }}
                        />
                        <YAxis
                            domain={['auto', 'auto']}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: "#6b7280" }}
                            tickFormatter={(value) => `₹${value}`}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                            formatter={(value: any) => [`₹${(Number(value) || 0).toFixed(2)}`, "Price"]}
                        />
                        <Area
                            type="monotone"
                            dataKey="price"
                            stroke="#153B50"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorPrice)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
