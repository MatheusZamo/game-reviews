import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
    try{
        const comment = await prisma.comment.findMany({
            where: { slug: 'fall-guys' }
        })
        console.log('Busca de dados realizada', comment)
    } catch (error) {
        console.error('Busca de dados com erro', error)
    } finally {
        await prisma.$disconnect()
    }
}

main()