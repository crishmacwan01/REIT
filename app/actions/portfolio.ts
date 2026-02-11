"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getPortfolios() {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
        return []
    }

    // @ts-ignore
    const userId = session.user.id

    return await prisma.portfolio.findMany({
        where: { userId },
        include: { items: { include: { instrument: true } } }
    })
}

export async function createPortfolio(name: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
        throw new Error("Unauthorized")
    }

    // @ts-ignore
    const userId = session.user.id

    const portfolio = await prisma.portfolio.create({
        data: {
            name,
            userId
        }
    })

    revalidatePath("/portfolio")
    return portfolio
}

// Add more actions as needed
