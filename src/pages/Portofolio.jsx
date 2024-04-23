import Navs from "../components/Navs";



export default function Portofolio() {
    return (


        <div id="Portofolio" className="" style={{ backgroundImage: `url("download.jpg")`, zIndex: "1" }}>
            <img src="bg.avif" className="w-full h-screen absolute" alt="Background" />

            <div className="w-full  h-screen flex bg-transparent relative">
                <img src="pic1.png" className="absolute top-0 right-24 w-1/3"></img>
                <div className="bg-black absolute ml-20 w-9/12 h-screen  text-white z-10  px-8 bg-opacity-95">
                    <h1 className="text-gray-600  font-bold mt-24">Portofolio<span className="text-red-900">___________</span></h1>
                    <h1 className="text-white  text-4xl font-bold py-3">My  Portofolio </h1>
                    <div className="mt-4">
                        <img src="Capture.JPG"></img>
                        <h1 className="text-white font-bold text-xl">Movie App</h1>
                    </div>

                </div>
            </div>



        </div>

    )
}
