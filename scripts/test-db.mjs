import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
    try{
        const comment = await prisma.comment.create({
            data: {
            slug : 'fall-guys',
            user: 'Joaquina',
            message: 'Teste 1'
        }
        })
        console.log('Comentario criado', comment)
    } catch (error) {
        console.error('Erro ao criar comentario', error)
    } finally {
        await prisma.$disconnect()
    }
}

main()