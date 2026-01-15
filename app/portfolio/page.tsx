import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PortfolioSummary } from "@/components/features/PortfolioSummary"
import { HoldingsTable } from "@/components/features/HoldingsTable"

export default function PortfolioPage() {
    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-col gap-2 mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-primary">My Portfolio</h1>
                <p className="text-muted-foreground">
                    Track your investments and performance.
                </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8 flex items-center justify-between">
                <div>
                    <h3 className="font-semibold text-primary">Complete your profile</h3>
                    <p className="text-sm text-muted-foreground">Open a Demat account to start trading REITs instantly.</p>
                </div>
                <Button asChild>
                    <Link href="/open-demat">Open Demat Account</Link>
                </Button>
            </div>

            <PortfolioSummary />
            <HoldingsTable />
        </div>
    )
}
