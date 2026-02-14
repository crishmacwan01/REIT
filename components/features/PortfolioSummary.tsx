import { ArrowUpRight, DollarSign, TrendingUp, Wallet } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PortfolioSummaryProps {
    totalValue: number
    totalGain: number
    totalGainPercent: number
    dayGain: number
    dayGainPercent: number
    dividendYield: number
}

export function PortfolioSummary({
    totalValue = 0,
    totalGain = 0,
    totalGainPercent = 0,
    dayGain = 0,
    dayGainPercent = 0,
    dividendYield = 0
}: Partial<PortfolioSummaryProps>) {
    return (
        <div className="grid gap-4 md:grid-cols-3 mb-8">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
                    <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">₹{totalValue.toLocaleString('en-IN')}</div>
                    <p className={`text-xs ${totalGain >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {totalGain >= 0 ? "+" : ""}{totalGainPercent.toFixed(2)}% all time
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Day's Gain</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className={cn("text-2xl font-bold", dayGain >= 0 ? "text-green-600" : "text-red-600")}>
                        {dayGain >= 0 ? "+" : ""}₹{dayGain.toLocaleString('en-IN')}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {dayGainPercent >= 0 ? "+" : ""}{dayGainPercent.toFixed(2)}% today
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Dividend Yield</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">₹{dividendYield.toLocaleString('en-IN')}</div>
                    <p className="text-xs text-muted-foreground">
                        ~5.2% annual yield
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

function cn(classes: string, condition?: string) {
    return classes + (condition ? " " + condition : "")
}
