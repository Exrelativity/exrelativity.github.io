import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Landing from '@/components/landing'
import Navbar from '@/components/navbar'
import Project from '@/components/project'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="container m-auto flex min-h-screen flex-col items-center justify-between md:p-24 pb-5 md:pb-5">
      <Navbar />
      <Landing />
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  )
}
