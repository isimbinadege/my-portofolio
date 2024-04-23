import Navs from "../components/Navs";



export default function About() {
    return (


        <div id="About" className="" style={{ backgroundImage: `url("download.jpg")`, zIndex: "1" }}>
            <img src="bg.avif" className="w-full h-screen absolute" alt="Background" />

            <div className="w-full h-screen flex bg-transparent relative">
                <img src="pic1.png" className="absolute top-0 right-24 w-1/3"></img>
                <div className="bg-black absolute ml-20 w-9/12 h-screen  text-white z-10  px-8 bg-opacity-95">
                    <h1 className="text-gray-600  font-bold mt-24">ABOUT<span className="text-red-900">___________</span></h1>
                    <h1 className="text-white  text-4xl font-bold py-3">LEARN MORE ABOUT ME</h1>
                    <div class="grid grid-cols-2">
                        <div className="">
                            <img src="pic2.png" className="" ></img></div>
                        <div className="ml-4">
                            <h1 className="text-red-900 text-3xl font-bold px-16">Full Stack Developer</h1>
                            <p className="text-white py-4 text-xl">"Building seamless digital experiences from front to back – I bring your ideas to life as a Full Stack Developer."</p>
                            <div className="grid grid-cols-2">
                                <h2 className="text-white font-bold text-lg py-7">
                                    <span className="text-red-900"> >> </span>Birthday: 1 jan 2002
                                </h2>
                                <h2 className="text-white font-bold text-lg py-7">
                                    <span className="text-red-900 py:7">></span> Age::22
                                </h2>
                                <h2 className="text-white font-bold text-lg py-7">
                                    <span className="text-red-900">></span>Website :www.isimbi.com</h2>
                                <h2 className="text-white font-bold text-lg py-7">
                                    <span className="text-red-900">></span>Degree: Bachelor
                                </h2>
                                <h2 className="text-white font-bold text-lg py-7">
                                    <span className="text-red-900">></span> Phone:+250784800280
                                </h2>
                                <h2 className="text-white font-bold text-lg py-7">
                                    <span className="text-red-900">></span> Email:isimbi0123@gmail.com
                                </h2>
                                <h2 className="text-white font-bold text-lg py-7">
                                    <span className="text-red-900">></span> City:Kigali/Rwanda
                                </h2>
                                <h2 className="text-white font-bold text-lg py-7">
                                    <span className="text-red-900">></span> Freelance:available
                                </h2>
                            </div>
                            <p className="text-white text-xl">Versatile Full Stack Developer with a passion for crafting innovative digital solutions. Proficient in both front-end and back-end technologies, adept at translating complex ideas into user-friendly experiences. Dedicated to continuous learning and staying updated with the latest industry trends to drive efficiency and deliver exceptional results.</p>
                        </div>
                        <h1 className="text-white">my skills</h1>
                    </div>
                </div>
            </div>



        </div>

    )
}
