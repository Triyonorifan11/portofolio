import { Link } from "react-router-dom";

function CardSosialMedia(props){
return (
    <div data-aos="zoom-in-up" className="w-full self-start px-5 lg:w-1/2 lg:mb-5 mb-10 rounded-lg shadow">
        <div className="flex flex-col items-center pb-10">
            <img src={props.gambar} className="w-24 h-24 mb-3 rounded-full shadow-lg my-8" alt="" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Triyono Rifan</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{props.akun}</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
                <a href={props.link} rel="noopener noreferrer" target="_blank" className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-primary rounded-full hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Add friend</a>
                {/* <a href={props.linkmessage}  rel="noopener noreferrer" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-secondary border border-gray-300 rounded-full hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-gray-200  ">Message</a> */}
            </div>
        </div>
    </div>
)
}

function Contactelemen(){
    const sosialmedia = [
        {
            id: 1,
            gambar : "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw",
            link: "https://www.linkedin.com/in/triyono-rifan-a19142224/",
            akun: "Linked in",
            linkmessage: "https://www.linkedin.com/in/triyono-rifan-a19142224/"
        },
        {
            id: 2,
            gambar : "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            link: "https://github.com/Triyonorifan11",
            akun: "Github Me",
            linkmessage: "https://github.com/Triyonorifan11"
        },
        {
            id: 3,
            gambar : "https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg?w=2000",
            link: "https://www.instagram.com/t_riyo.id/",
            akun: "Instagram",
            linkmessage: "https://www.instagram.com/t_riyo.id/"
        },
    ]
    return (
        <section id="home" className="mt-32">
            <div className="container">
                <div className="flex flex-wrap overflow-hidden">
                    <div  data-aos="zoom-in-up" className="w-full self-center px-5 md:w-1/2 lg:w-1/2 mb-20">
                        <h1 className="text-xl font-semibold text-primary lg:text-3xl my-10">Hello There 👋👋 <span className="block font-bold text-dark text-4xl pt-2 lg:text-5xl mb-2 font-gothamBlack">Let's Connect</span></h1>
                        <Link to="/contact" className="my-9 font-semibold text-base text-white bg-primary px-7 py-3 hover:bg-opacity-90 shadow-xl transition duration-100 ease-in-out focus:border-none rounded-full">Contact Me</Link>
                    </div>

                    <div className="w-full self-center px-5 md:w-1/2 lg:w-1/2 mb-20">
                        <div className="flex flex-wrap justify-center overflow-hidden">
                        {sosialmedia.map(elemen => <CardSosialMedia key={elemen.id} gambar={elemen.gambar} akun={elemen.akun} link={elemen.link} linkmessage={elemen.linkmessage} />)}
                        </div>
                    </div>

                    
                </div>
                
            </div>
        </section>
    )
}

export default Contactelemen;