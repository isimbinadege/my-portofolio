import Navs from "../components/Navs";

export default function Portofolio() {
    return (
        <div id="Portofolio" className="relative bg-cover bg-center" style={{ backgroundImage: `url("download.jpg")` }}>
            <img src="bg.avif" className="w-full h-full object-cover absolute" alt="Background" />

            <div className="w-full min-h-screen flex flex-col lg:flex-row bg-transparent relative z-10 px-4 lg:px-20 py-8 lg:py-0">
                <img src="pic1.png" className="absolute top-0 right-0 lg:right-24 w-full lg:w-1/3 object-contain lg:object-cover" alt="Profile" />
                <div className="bg-black w-full lg:w-9/12 h-full text-white z-20 px-8 py-12 bg-opacity-95 lg:ml-20 relative">
                    <h1 className="text-gray-600 font-bold mt-24">Portofolio<span className="text-red-900">___________</span></h1>
                    <h1 className="text-white text-4xl font-bold py-3">My Portofolio</h1>
                    <div className="mt-4">
                        <img src="Capture.JPG" className="w-full h-auto object-contain rounded-lg" alt="Movie App" />
                        <h1 className="text-white font-bold text-xl mt-4">Movie App</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
