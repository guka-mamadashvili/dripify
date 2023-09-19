import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'
import Link  from 'next/link'

const men = "/men.webp"
const women = "/woman.webp"


export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <div className="flex w-[100%] justify-center items-center p-10 space-x-14 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:space-y-4 max-sm:space-x-0">
      <Link href="men"><Card backgroundImage={men} Title="Men"/></Link>
      <Link href={"women"}><Card backgroundImage={women} Title="Women"/></Link>
      </div>
    </main>
  )
}
