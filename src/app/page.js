import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col bg-[#121212] py-8">
      <NavBar />
      <div className='container mx-auto px-12 py-6 '>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
       
      </div>
      <Footer />
    </main>
  )
}