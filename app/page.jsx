import Link from "next/link"
import Image from "next/image"

const Home = async () => {
  return (
    <>
      <div className="rounded-lg border-2 border-slate-700 w-1/2 hover:shadow-lg">
        <Link href="/analises/sonic-frontiers" className="flex">
          <Image
            src="/sonic-frontiers.jpg"
            width="320"
            height="180"
            alt=""
            priority
            className="rounded-l-lg"
          />
          <div className="p-3">
            <h2 className="text-xl font-montserrat">Sonic Frontiers - Análise</h2>
            <p>Breve parágrafo aqui</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Home