import Navs from "../components/Navs";

export default function Resume() {
    return (
        <div id="Resume" className="relative bg-cover bg-center" style={{ backgroundImage: `url("download.jpg")` }}>
            <img src="bg.avif" className="w-full h-full object-cover absolute" alt="Background" />

            <div className="w-full min-h-screen flex flex-col lg:flex-row bg-transparent relative z-10 px-4 lg:px-20 py-8 lg:py-0">
                <img src="pic1.png" className="absolute top-0 right-0 lg:right-24 w-full lg:w-1/3 object-contain lg:object-cover" alt="Profile" />
                <div className="bg-black w-full lg:w-9/12 h-full text-white z-20 px-8 py-12 bg-opacity-95 lg:ml-20 relative">
                    <h1 className="text-gray-600 font-bold mt-24">RESUME<span className="text-red-900">___________</span></h1>
                    <h1 className="text-white text-4xl font-bold py-3">CHECK MY RESUME</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <h1 className="text-white text-2xl py-3 font-semibold">Education</h1>
                            <div className="py-4">
                                <h2 className="text-red-900 text-xl font-semibold">* BACHELOR OF BUSINESS INFORMATION TECHNOLOGY</h2>
                                <h2 className="bg-gray-600 h-10 text-white w-32 ml-4 py-3 text-center">2021-2024</h2>
                                <h1 className="text-white py-3">University of Rwanda, Huye Campus</h1>
                                <p className="text-white">"Graduate of UR, where I honed my expertise in Business Information Technology through a dynamic curriculum and hands-on experiences."</p>
                            </div>
                            <div className="py-4">
                                <h2 className="text-red-900 text-xl font-semibold">* A2 Diploma in Software Development</h2>
                                <h2 className="bg-gray-600 h-10 text-white w-32 ml-4 py-3 text-center">2017-2019</h2>
                                <h1 className="text-white py-3">Runda Technical Secondary School</h1>
                                <p className="text-white">"High school graduate with a passion for software development and a strong foundation in programming principles."</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white text-2xl py-3 font-semibold">Professional Experience</h1>
                            <div className="py-4">
                                <h2 className="text-red-900 text-xl font-semibold">* Software Developer</h2>
                                <h2 className="bg-gray-600 h-10 text-white w-32 ml-4 py-3 text-center">2024</h2>
                                <h1 className="text-white py-3">IDA Technology</h1>
                                <p className="text-white">"Interned at IDA Technology, gaining hands-on experience in software development. Contributed to projects involving specific tasks, while learning industry best practices under mentorship."</p>
                            </div>
                            <div className="py-4">
                                <h2 className="text-red-900 text-xl font-semibold">* Data Analyst & Embedded Developer</h2>
                                <h2 className="bg-gray-600 h-10 text-white w-32 ml-4 py-3 text-center">2023-2024</h2>
                                <h1 className="text-white py-3">Afretec Big Data Analytics & Embedded System Short Courses</h1>
                                <p className="text-white">"Completed specialized training in embedded systems and big data analytics through Afretec short courses. Applied practical skills in developing embedded systems and analyzing large datasets, enhancing proficiency in cutting-edge technologies."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
