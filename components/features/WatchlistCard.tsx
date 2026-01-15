import { ArrowUpRight, ArrowDownRight, MoreHorizontal, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface WatchlistCardProps {
    symbol: string
    name: string
    price: number
    change: number
    changePercent: number
}

export function WatchlistCard({ symbol, name, price, change, changePercent }: WatchlistCardProps) {
    const isPositive = change >= 0

    return (
        <Card className="hover-scale hover-glow transition-all duration-200 cursor-pointer">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div>
                    <CardTitle className="text-base font-bold">
                        <Link href={`/instrument/${symbol}`} className="hover:text-primary transition-colors">
                            {symbol}
                        </Link>
                    </CardTitle>
                    <p className="text-xs text-muted-foreground truncate max-w-[120px]">{name}</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 -mt-1 -mr-2 text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                <div className="flex items-end justify-between mt-2">
                    <div className="text-2xl font-bold">₹{price.toFixed(2)}</div>
                    <div className={cn("flex flex-col items-end text-sm font-medium", isPositive ? "text-green-600" : "text-red-600")}>
                        <div className="flex items-center">
                            {isPositive ? <ArrowUpRight className="h-4 w-4 mr-0.5" /> : <ArrowDownRight className="h-4 w-4 mr-0.5" />}
                            {Math.abs(changePercent).toFixed(2)}%
                        </div>
                        <div className="text-xs opacity-80">
                            {isPositive ? "+" : ""}{change.toFixed(2)}
                        </div>
                    </div>
                </div>

                {/* Mini Sparkline Mock */}
                <div className="h-8 w-full mt-4 flex items-end gap-0.5 opacity-50">
                    {[...Array(20)].map((_, i) => {
                        // Deterministic pseudo-random height based on symbol and index
                        const seed = symbol.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + i;
                        const pseudoRandom = Math.abs(Math.sin(seed));
                        const height = 30 + (pseudoRandom * 70);

                        return (
                            <div
                                key={i}
                                className={cn("flex-1 rounded-t-sm", isPositive ? "bg-green-500" : "bg-red-500")}
                                style={{ height: `${height}%` }}
                            ></div>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    )
}
