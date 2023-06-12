import { Link } from "react-router-dom";
import { WavesElement } from "./waves";

function Footer(){
    const date = new Date();
    return(
        <div className="relative bg-primary">
            <WavesElement background="bg-white" fill="fill-primary" topBottom="top-0" rotate="" />
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 pt-32 lg:pl-24 lg:text-left text-center">
                    <div className="py-10 leading-3 px-10 lg:px-0">
                        <p className="text-white text-2xl leading-8 font-bold">&copy; {date.getFullYear()} - Triyono Rifan</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 pt-32 lg:pl-24 lg:text-left text-center">
                    <div className="w-full lg:px-10 ">
                        <div className="flex justify-around text-white">
                            <div className="py-10 leading-3 px-10 lg:px-0">
                                <h6 className="text-white text-2xl leading-8 font-bold">Elsewhere</h6>
                                <Link to="https://github.com/Triyonorifan11" target="_blank" className="block mt-4 text-white text-xl leading-8"> <i className="bi bi-github mr-3"></i> Github</Link>
                                <Link to="https://www.linkedin.com/in/triyono-rifan-a19142224/" target="_blank" className="block mt-4 text-white text-xl leading-8"><i className="bi bi-linkedin mr-3"></i> Linked In</Link>
                            </div>
                            <div className="py-10 leading-3 px-10 lg:px-0">
                                <h6 className="text-white text-2xl leading-8 font-bold">Contact</h6>
                                <Link to="https://www.instagram.com/t_riyo.id/" target="_blank" className="block mt-4 text-white text-xl leading-8"><i className="bi bi-instagram mr-3"></i> Instagram</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
