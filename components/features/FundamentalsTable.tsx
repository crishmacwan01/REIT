import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FundamentalsTable() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base">Fundamentals</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">Market Cap</div>
                        <div className="font-medium">₹45,000 Cr</div>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">Dividend Yield</div>
                        <div className="font-medium">5.20%</div>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">P/E Ratio</div>
                        <div className="font-medium">--</div>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">Occupancy</div>
                        <div className="font-medium">92.5%</div>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">WALE</div>
                        <div className="font-medium">5.8 Years</div>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">LTV Ratio</div>
                        <div className="font-medium">28.5%</div>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">NAV</div>
                        <div className="font-medium">₹245.00</div>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">52W High/Low</div>
                        <div className="font-medium">250.00 / 210.00</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
