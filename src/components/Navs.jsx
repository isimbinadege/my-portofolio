import { BrowserRouter } from "react-router-dom";


export default function Navs() {
    return (

        <div className="flex flex-wrap bg-black font-serif py-8 sticky top-0 z-50">

            <h1 className="italic text-transparent bg-clip-text bg-gradient-to-r from-red-950 to-red-500 text-5xl ml-8 font-bold">ISIMBI Nadege</h1>
            <nav className="text-white ml-96 flex flex-wrap  top-0">
                <ul className="hidden md:flex flex-wrap text-2xl ">
                    <li className="px-8 hover:bg-red-900 hover:border rounded-lg">
                        <a href="#Home">Home</a>
                    </li>
                    <li className="px-8 hover:bg-red-900 hover:border rounded-lg">
                        <a href="#About" >About</a>
                    </li>
                    <li className="px-8 hover:bg-red-900 hover:border rounded-lg">
                        <a href="#Resume">Resume</a>

                    </li>
                    <li className="px-8 hover:bg-red-900 hover:border rounded-lg" >
                        <a href="#Portofolio">Portofolio</a>
                    </li>
                    <li className="px-8 hover:bg-red-900 hover:border rounded-lg">
                        <a href="#Contact"> Contact</a>
                    </li>
                </ul>
            </nav>

        </div>

    )
}
