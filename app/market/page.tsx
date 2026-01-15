import { MarketTable } from "@/components/features/MarketTable"
import { MarketFilters } from "@/components/features/MarketFilters"

export default function MarketPage() {
    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-col gap-2 mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-primary">Market Overview</h1>
                <p className="text-muted-foreground">
                    Discover and analyze Indian Real Estate and Infrastructure Trusts.
                </p>
            </div>

            <MarketFilters />
            <MarketTable />
        </div>
    )
}
