import Link from "next/link"
import Heading1 from "@/components/heading1"
import Image from "next/image"

const Reviews = () => {
    return(
        <>
          <Heading1>Análises</Heading1>
          <ul className='flex'>
            <li>
              <Link href='/analises/super-mario-bros-wonder'>
                <div className='w-[320px] h-[220px] rounded-lg bg-slate-700 m-3'>
                  <Image 
                    src='/super-mario-bros-wonder.jpg'
                    alt='super-mario-bros-wonder'
                    width={320}
                    height={180}
                    className='rounded-lg'
                  />
                  <p className='text-center mt-2 text-lg font-montserrat'>Super Mario Bros. Wonder</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href='/analises/sonic-frontiers'>
                 <div className='w-[320px] h-[220px] rounded-lg bg-slate-700 m-3'>
                  <Image 
                    src='/sonic-frontiers.jpg'
                    alt='sonic-frontiers'
                    width={320}
                    height={180}
                    className='rounded-lg'
                  />
                  <p className='text-center mt-2 text-lg font-montserrat'>Sonic Frontiers</p>
                 </div>
                </Link>
             </li>
          </ul>
        </>
    )
}

export default Reviews