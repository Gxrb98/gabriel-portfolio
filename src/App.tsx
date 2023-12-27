import About from './components/About.tsx';
import Home from './components/Home.tsx';
import Nav from './components/Nav.tsx';
import SideBar from './components/SideBar.tsx';
import { useTranslation } from "react-i18next";
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

export const App = () => {

  const languages: any = {
    en: { nativeName: 'English' },
    pt: { nativeName: 'Português' },
    es: { nativeName: 'Español' }
  }


  const { i18n } = useTranslation();
  return (
    <div className='w-screen max-w-full m-0 box-border p-0 bg-main overflow-x-hidden'>

      <Nav />
      <div className='md:mx-[3rem] '>
        <div className='absolute mt-5 lg:mt-8 p-0 md:gap-x-6 flex pr-4 gap-4 w-full md:w-0 justify-end md:justify-start lg:mx-[8rem] md:z-50 md:my-2 z-40 text-white'>
          {Object.keys(languages).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" className="nav" onClick={() => { i18n.changeLanguage(lng) }}>
              {languages[lng].nativeName}
            </button>
          ))}
        </div>
        <Home />
        <div className='md:fixed flex md:flex-col md:top-[45%] md:left-[95vw] md:text-2xl text-white absolute w-full justify-center'>
          <SideBar />
        </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>


    </div >
  )
}


