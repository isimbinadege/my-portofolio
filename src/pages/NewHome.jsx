import insta from '../components/images/insta.svg';
import link from '../components/images/link.svg';
import git from '../components/images/git.svg';
import About from './About';
import Contact from './NewContact';
import Resume from './Resume';
import Portofolio from './Portofolio';

export default function Home() {
    return (
        <div>
            <div id='Home' className="relative bg-cover bg-center" style={{ backgroundImage: `url("download.jpg")` }}>
                <img src="bg.avif" className="w-full h-screen object-cover absolute" alt="Background" />
                <div className="sm:grid-cols-reverse grid lg:grid-cols-2 relative">
                    <div className='lg:py-52 px-8 relative z-10'>
                        <h1 className="hidden lg:flex italic text-transparent bg-clip-text bg-gradient-to-r from-red-950 to-red-500 text-3xl ml-8 font-bold">ISIMBI Nadege !</h1>
                        <p className="text-white py-4 text-xl">I'm deeply enthusiastic about Full-stack development & UI/UX Design from Rwanda</p>
                        <div className='flex flex-wrap'>
                            <a href="https://www.instagram.com/nanty_nais/"><img src={insta} alt="Instagram" className='w-8 h-8'/></a>
                            <a href="https://www.linkedin.com/in/isimbi-nadege-6479252ba/"><img src={link} className='w-8 h-8 px-4' alt="LinkedIn"/></a>
                            <a href="https://github.com/isimbinadege"><img src={git} alt="GitHub" className='w-8 h-8'/></a>
                        </div>
                    </div>
                    <div className="w-full lg:h-screen flex items-center justify-center bg-transparent relative z-10">
                        <img src="pic1.png" className="max-w-full max-h-full object-contain" alt="Profile"/>
                    </div>
                </div>
            </div>
            <About />
            <Resume />
            <Portofolio />
            <Contact />
        </div>
    )
}
