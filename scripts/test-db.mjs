import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
    try{
        // const comment = await prisma.comment.create({
        //     data: {
        //     slug : 'fall-guys',
        //     user: 'Joaquina',
        //     message: 'Teste 1'
        // }
        // })       Cria apenas 1 novo comentario no banco 

        const comment = await prisma.comment.createMany({
            data: [
                {
            slug : 'fall-guys',
            user: 'Joaquim',
            message: 'Teste 2'
                }, 
            {
            slug : 'stardew-valley',
            user: 'Roberto',
            message: 'Teste 3'
            }
        ]
        })

        //cria mais de 1 comentario no banco de dados

        console.log('Comentario criado', comment)
    } catch (error) {
        console.error('Erro ao criar comentario', error)
    } finally {
        await prisma.$disconnect()
    }
}

main()