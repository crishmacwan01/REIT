import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal } from "lucide-react"

export function MarketFilters() {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <div className="relative w-full md:w-96">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Filter by symbol or name..."
                    className="pl-9"
                />
            </div>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    All Filters
                </Button>
                <Button variant="secondary" size="sm" className="whitespace-nowrap">REITs</Button>
                <Button variant="ghost" size="sm" className="whitespace-nowrap">EITs</Button>
                <Button variant="ghost" size="sm" className="whitespace-nowrap">High Yield</Button>
                <Button variant="ghost" size="sm" className="whitespace-nowrap">Large Cap</Button>
            </div>
        </div>
    )
}
