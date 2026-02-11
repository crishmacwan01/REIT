import prisma from './lib/prisma';

async function main() {
    try {
        console.log('Connecting...');
        await prisma.$connect();
        console.log('Connected successfully!');
        const users = await prisma.user.count();
        console.log(`User count: ${users}`);
    } catch (e) {
        console.error('Connection failed:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
