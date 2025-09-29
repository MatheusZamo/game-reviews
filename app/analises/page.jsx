import Link from "next/link"
import Heading1 from "@/components/heading1"
import Image from "next/image"

const reviews = [
  {
    title: 'Super Mario Bros. Wonder',
    path: '/analises/super-mario-bros-wonder',
    img: '/super-mario-bros-wonder.jpg'
  }, 
  {
    title: 'Sonic Frontiers',
    path: '/analises/sonic-frontiers',
    img: '/sonic-frontiers.jpg'
  }
]

const Reviews = () => {
    return(
        <>
          <Heading1>Análises</Heading1>
          <ul className='flex gap-5 mt-3'>
            {reviews.map((review) => (
              <li key={review.title} className='rounded-lg bg-slate-700 border border-slate-700 hover:shadow-lg'>
                <Link href={review.path}>
                  <Image 
                    src={review.img}
                    alt='super-mario-bros-wonder'
                    width={320}
                    height={180}
                    className='rounded-t-lg'
                    priority
                  />
                  <p className='text-center mt-2 text-base font-montserrat'>{review.title}</p>
                </Link>
            </li>
            ))}
          </ul>
        </>
    )
}

export default Reviews