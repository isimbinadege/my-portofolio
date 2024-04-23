
import insta from '../components/images/insta.svg';
import link from '../components/images/link.svg';
import git from '../components/images/git.svg';
import About from './About';
import Contact from './NewContact';
import Resume from './Resume';
import Portofolio from './Portofolio';
//import Contact from '../pages/Contact';
export default function Home() {
    return (
        <div>
            <div id='Home' className="" style={{ backgroundImage: `url("download.jpg")` }}>
                <img src="bg.avif" className="w-full h-screen absolute" alt="Background" />
                <div className="sm:grid-cols-reverse grid lg:grid-cols-2  relative">
                    <div className='lg:py-52 px-8'>
                        <h1 className="hidden lg:flex italic text-transparent bg-clip-text bg-gradient-to-r from-red-950 to-red-500 text-3xl ml-8 font-bold">ISIMBI Nadege !</h1>
                        <p className="text-white py-4  text-xl ">I'm deeply enthusiastic about Full-stack developer & UI/UX Designer from Rwanda</p>
                        <div className='flex flex-wrap'>
                            <a href="https://www.instagram.com/nanty_nais/"><img src={insta} /></a>
                            <a href="https://www.linkedin.com/in/isimbi-nadege-6479252ba/"><img src={link} className='px-4' /></a>
                            <a href="https://github.com/isimbinadege"><img src={git} /></a>
                        </div>


                    </div>
                    <div className="w-full lg:h-screen  flex bg-transparent  ">
                        <img src="pic1.png" className=""></img>
                    </div></div>


            </div>
            <About />
            <Resume />
            <Portofolio />
            <Contact />

        </div>


    )
}
