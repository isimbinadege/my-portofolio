import Navs from "../components/Navs";
import link from '../components/images/link.svg';
import insta from '../components/images/insta.svg';

export default function Resume() {
    return (
        <div id="Contact" className="relative bg-cover bg-center" style={{ backgroundImage: `url("download.jpg")` }}>
            <img src="bg.avif" className="w-full h-full object-cover absolute" alt="Background" />

            <div className="w-full min-h-screen flex flex-col lg:flex-row bg-transparent relative z-10 px-4 lg:px-20 py-8 lg:py-0">
                <img src="pic1.png" className="absolute top-0 right-0 lg:right-24 w-full lg:w-1/3 object-contain lg:object-cover" alt="Profile" />
                <div className="bg-black w-full lg:w-9/12 h-full text-white z-20 px-8 py-12 bg-opacity-95 lg:ml-20 relative">
                    <h1 className="text-gray-600 font-bold mt-24">Contact<span className="text-red-900">___________</span></h1>
                    <h1 className="text-white text-4xl font-bold py-3">CONTACT ME</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <div className="bg-gray-600 border-2 rounded-lg border-red-900 p-4">
                                <h1 className="text-white text-xl py-3 font-semibold">My address</h1>
                                <h2 className="text-red-900 text-lg font-semibold">KK-215, Kicukiro/Kigali</h2>
                            </div>
                            <div className="bg-gray-600 mt-6 border-2 rounded-lg border-red-900 p-4">
                                <h1 className="text-white text-xl py-3 font-semibold">Email Me</h1>
                                <h2 className="text-red-900 text-lg font-semibold">isimbi0123@gmail.com</h2>
                            </div>
                        </div>
                        <div className="lg:ml-9">
                            <div className="bg-gray-600 border-2 rounded-lg border-red-900 p-4">
                                <h1 className="text-white text-xl py-3 font-semibold">Social Profiles</h1>
                                <div className="flex space-x-4">
                                    <a href="https://www.instagram.com/nanty_nais/"><img src={insta} alt="Instagram" className="w-8 h-8" /></a>
                                    <a href="https://www.linkedin.com/in/isimbi-nadege-6479252ba/"><img src={link} className="w-8 h-8" alt="LinkedIn" /></a>
                                </div>
                            </div>
                            <div className="bg-gray-600 mt-6 border-2 rounded-lg border-red-900 p-4">
                                <h1 className="text-white text-xl py-3 font-semibold">Call Me</h1>
                                <h2 className="text-red-900 text-lg font-semibold">+250784800280</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:space-x-4 mt-6">
                        <input type="text" placeholder="Your name" className="bg-gray-500 w-full lg:w-1/2 h-12 text-center border-2 rounded-lg border-red-900 mb-4 lg:mb-0" />
                        <input type="text" placeholder="Your email" className="bg-gray-500 w-full lg:w-1/2 h-12 text-center border-2 rounded-lg border-red-900" />
                    </div>
                    <input type="text" placeholder="Subject" className="bg-gray-500 w-full h-12 text-center border-2 rounded-lg border-red-900 mt-4" />
                    <textarea placeholder="Message" className="bg-gray-500 w-full h-32 text-center border-2 rounded-lg border-red-900 mt-4"></textarea>
                    <button className="bg-red-900 text-white font-semibold w-full lg:w-1/4 h-12 mt-4 border rounded-lg flex justify-center items-center">Send</button>
                </div>
            </div>
        </div>
    )
}
