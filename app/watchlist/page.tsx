import { WatchlistCard } from "@/components/features/WatchlistCard"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { MOCK_INSTRUMENTS } from "@/lib/mock-data"

export default function WatchlistPage() {
    return (
        <div className="container mx-auto py-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-primary">My Watchlist</h1>
                    <p className="text-muted-foreground">
                        Monitor your favorite instruments.
                    </p>
                </div>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Symbol
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {MOCK_INSTRUMENTS.map((item) => (
                    <WatchlistCard
                        key={item.symbol}
                        symbol={item.symbol}
                        name={item.name}
                        price={item.lastPrice}
                        change={item.change}
                        changePercent={item.changePercent}
                    />
                ))}
            </div>
        </div>
    )
}
