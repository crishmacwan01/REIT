import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricePanelProps {
    price: number
    change: number
    changePercent: number
}

export function PricePanel({ price, change, changePercent }: PricePanelProps) {
    const isPositive = change >= 0

    return (
        <div className="flex items-end gap-4 mb-6">
            <div className="text-4xl font-bold text-foreground">
                ₹{price.toFixed(2)}
            </div>
            <div className={cn("flex items-center mb-1.5 font-medium", isPositive ? "text-green-600" : "text-red-600")}>
                {isPositive ? <ArrowUpRight className="h-5 w-5 mr-1" /> : <ArrowDownRight className="h-5 w-5 mr-1" />}
                <span className="text-lg">{Math.abs(change).toFixed(2)}</span>
                <span className="text-lg ml-1">({Math.abs(changePercent).toFixed(2)}%)</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2 ml-auto">
                As of {new Date().toLocaleTimeString()} IST
            </div>
        </div>
    )
}
