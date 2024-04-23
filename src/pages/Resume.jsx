import Navs from "../components/Navs";



export default function Resume() {
    return (


        <div id="Resume" className="" style={{ backgroundImage: `url("download.jpg")`, zIndex: "1" }}>
            <img src="bg.avif" className="w-full h-screen absolute" alt="Background" />

            <div className="w-full  h-screen flex bg-transparent relative">
                <img src="pic1.png" className="absolute top-0 right-24 w-1/3"></img>
                <div className="bg-black absolute ml-20 w-9/12 h-screen  text-white z-10  px-8 bg-opacity-95">
                    <h1 className="text-gray-600  font-bold mt-24">RESUME<span className="text-red-900">___________</span></h1>
                    <h1 className="text-white  text-4xl font-bold py-3">CHECK MY RESUME</h1>
                    <div class="grid grid-cols-2 ">
                        <div className="">

                            <h1 class="text-white text-2xl py-3 font-semibold">Education</h1>
                            <h2 class="text-red-900 text-xl font-semibold">* BACHELOR OF BUSINESS INFORMATION TECHNOLOGY</h2>
                            <h2 class="bg-gray-600 h-10 text-white w-20 ml-20 py-3 ">2021-2024</h2>
                            <h1 class="text-white py-3">University of Rwanda,huye campus</h1>
                            <p class="text-white">"Graduate of UR , where I honed my expertise in Business information technology through a dynamic curriculum and hands-on experiences."</p>
                            <h2 class="text-red-900 text-xl font-semibold py-4">* A2 diploma in Software development</h2>
                            <h2 class="bg-gray-600 h-10 text-white w-20 ml-20 py-3 ">2017-2019</h2>
                            <h1 class="text-white py-3">Runda technical secondary school</h1> <p class="text-white">"High school graduate with a passion for software development and a strong foundation in programming principles."</p></div>
                        <div className="ml-4">
                            <h1 class="text-white text-2xl py-3 font-semibold">Professional Experience</h1>
                            <h2 class="text-red-900 text-xl font-semibold">* Software developer</h2>
                            <h2 class="bg-gray-600 h-10 text-white w-20 ml-20 py-3 ">2024</h2>
                            <h1 class="text-white py-3">IDA Technology</h1>
                            <p class="text-white">"Interned at IDA Technology, gaining hands-on experience in software development. Contributed to projects involving specific tasks, while learning industry best practices under mentorship."</p>
                            <h2 class="text-red-900 text-xl font-semibold">* Data analyst & embedded developer</h2><h2 class="bg-gray-600 h-10 text-white w-20 ml-20 py-3 ">2023-2024</h2>
                            <h1 class="text-white py-3">Afretec big data analytics &embedded system short courses</h1>
                            <p class="text-white">"Completed specialized training in embedded systems and big data analytics through Afretec short courses. Applied practical skills in developing embedded systems and analyzing large datasets, enhancing proficiency in cutting-edge technologies."</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}
