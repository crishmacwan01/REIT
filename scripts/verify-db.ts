import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Connecting to database...')
    try {
        const userCount = await prisma.user.count()
        console.log(`Current user count: ${userCount}`)

        const count = await prisma.instrument.count()
        console.log(`Instrument count: ${count}`)

        if (count === 0) {
            console.log('Seeding initial instruments...')
            await prisma.instrument.createMany({
                data: [
                    { symbol: 'REIT1', name: 'India Shopping REIT', type: 'REIT' },
                    { symbol: 'INVIT1', name: 'Power InVIT', type: 'INVIT' }
                ]
            })
            console.log('Seeding completed.')
        }
    } catch (e) {
        console.error('Error connecting to database:', e)
        process.exit(1)
    }
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
