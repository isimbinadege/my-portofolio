import Navs from "../components/Navs";
import link from '../components/images/link.svg';
import insta from '../components/images/insta.svg';


export default function Resume() {
    return (


        <div id="Contact" className="" style={{ backgroundImage: `url("download.jpg")`, zIndex: "1" }}>
            <img src="bg.avif" className="w-full h-screen absolute" alt="Background" />

            <div className="w-full h-80 flex bg-transparent relative"> change
                <img src="pic1.png" className="absolute top-0 right-24 w-1/3"></img>
                <div className="bg-black absolute ml-20 w-9/12 h-screen  text-white z-10  px-8 bg-opacity-95">
                    <h1 className="text-gray-600  font-bold mt-24">Contact<span className="text-red-900">___________</span></h1>
                    <h1 className="text-white  text-4xl font-bold py-3">CONTACT ME</h1>
                    <div class="grid grid-cols-2 ">
                        <div class=" "><div class="bg-gray-600 border-10 rounded-lg border-red-900 ">
                            <h1 class="text-white text-xl py-3 font-semibold ">My address</h1>
                            <h2 class="text-red-900 text-lg font-semibold">KK-215,Kicukiro/Kigali</h2></div>
                            <div class="bg-gray-600 mt-6 border-10 rounded-lg border-red-900">
                                <h1 class="text-white text-xl py-3 font-semibold ">Email Me</h1>
                                <h2 class="text-red-900 text-lg font-semibold">isimbi0123@gmail.com</h2></div>
                        </div>
                        <div class="ml-9">
                            <div class="bg-gray-600 border-10 rounded-lg border-red-900">
                                <h1 class="text-white text-xl py-3 font-semibold  ">Social Profiles</h1><div className="flex flex-wrap">

                                    <a href="https://www.instagram.com/nanty_nais/"><img src={insta} /></a>
                                    <a href="https://www.linkedin.com/in/isimbi-nadege-6479252ba/"><img src={link} className='px-4' /></a></div></div>
                            <div class="bg-gray-600 mt-6 border-10 rounded-lg border-red-900">
                                <h1 class="text-white text-2xl py-3 font-semibold ">Call Me</h1>
                                <h2 class="text-red-900 text-xl font-semibold">+250784800280</h2></div>

                        </div>
                        <div class="flex flex-wrap w-full mt-6">
                            <input type="text" placeholder="your name" class="bg-gray-500 w-72 h-20 text-center border-10 rounded-lg border-red-900" />
                            <input type="text" placeholder="your email" class="bg-gray-500 w-72 mx-2 h-20 text-center border-10 rounded-lg border-red-900 " />
                        </div></div>
                    <div className="">
                        <input type="text" placeholder="subject" className="bg-gray-500 h-20 mt-4 w-9/12 border-10 rounded-lg border-red-900" />
                        <textarea placeholder="message" className="bg-gray-500 h-20 mt-4 w-9/12 border-10 rounded-lg border-red-900"></textarea ><br />
                        <button class="bg-red-900 text-white font-semibold w-20 h-14 border rounded-lg flex justify-center items-center ">Send</button>

                    </div>

                </div>
            </div>
        </div>


    )
}
