"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { MOCK_INSTRUMENTS } from "@/lib/mock-data"

export async function addToWatchlist(symbol: string) {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        throw new Error("You must be logged in to add to watchlist")
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email }
    })

    if (!user) {
        throw new Error("User not found")
    }

    // Find instrument details from mock data if not in DB, 
    // or just use the symbol to create/find the instrument
    const mockInstrument = MOCK_INSTRUMENTS.find(i => i.symbol === symbol)

    // Ensure instrument exists in DB
    const instrument = await prisma.instrument.upsert({
        where: { symbol },
        update: {},
        create: {
            symbol,
            name: mockInstrument?.name || symbol,
            type: mockInstrument?.type || "REIT",
        }
    })

    // Ensure user has a default watchlist
    let watchlist = await prisma.watchlist.findFirst({
        where: { userId: user.id, name: "My Watchlist" }
    })

    if (!watchlist) {
        watchlist = await prisma.watchlist.create({
            data: {
                userId: user.id,
                name: "My Watchlist"
            }
        })
    }

    // Add item to watchlist
    await prisma.watchlistItem.create({
        data: {
            watchlistId: watchlist.id,
            instrumentId: instrument.id
        }
    })

    revalidatePath("/watchlist")
    return { success: true }
}

export async function getWatchlists() {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        return []
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email }
    })

    if (!user) {
        return []
    }

    const watchlists = await prisma.watchlist.findMany({
        where: { userId: user.id },
        include: {
            items: {
                include: {
                    instrument: true
                }
            }
        }
    })

    return watchlists
}
