import { ArrowUpRight, ArrowDownRight, Activity, TrendingUp, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MARKET_SNAPSHOT } from "@/lib/mock-data"

export function MarketSnapshot() {
    return (
        <section className="container mx-auto py-12">
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Market Cap</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{MARKET_SNAPSHOT.totalMarketCap}</div>
                        <p className="text-xs text-muted-foreground">
                            +2.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Average Yield</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{MARKET_SNAPSHOT.avgYield}</div>
                        <p className="text-xs text-muted-foreground">
                            +0.4% from last quarter
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Volatility Index</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{MARKET_SNAPSHOT.volatilityIndex}</div>
                        <p className="text-xs text-muted-foreground">
                            -1.2% (Low Volatility)
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
