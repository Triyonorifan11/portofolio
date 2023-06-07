import computer from "../resource/img/computer.png"
function Skills(){
    return(
        <div className="relative bg-primary">
            <div className="bg-white absolute top-0 left-0 w-[100%] overflow-hidden leading-[0] ">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-primary"></path>
                </svg>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-[40%] mt-32 lg:pl-24 lg:text-left text-center">
                    <h1 className="block font-bold text-white text-4xl pt-2 lg:mt-12 lg:text-5xl mb-2 font-gothamBlack">I'm a Junior Front-End Web Developer</h1>
                    <div className="py-10 leading-3 px-10 lg:px-0">
                        <p className="text-white text-xl leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non quasi fugit repellendus vero officiis, ab reprehenderit consequatur odio aliquam aut, ipsam placeat dolores quia eos vitae quae harum dolorem?</p>
                        <p className="text-white text-xl leading-8 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non quasi fugit repellendus vero officiis, ab reprehenderit consequatur odio aliquam aut, ipsam placeat dolores quia eos vitae quae harum dolorem?</p>
                    </div>
                </div>
                <div className="w-full lg:w-[60%] lg:mt-32">
                    <div className="w-full overflow-hidden">
                        <div className="flex justify-end relative left-10 lg:left-32 md:left-24">
                            <img src={computer} alt="komputer" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;