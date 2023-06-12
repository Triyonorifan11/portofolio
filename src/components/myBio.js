import computer from "../resource/img/computer.png"
import { WavesElement, WavesOpacityElement } from "./waves";
function MyBio(){
    return(
        <div className="relative bg-primary">
            <WavesElement background="bg-white" fill="fill-primary" topBottom="top-0" rotate="" />
            <div className="flex flex-wrap">
                <div className="w-full lg:w-[40%] mt-32 lg:pl-24 lg:text-left text-center">
                    <h1 className="block font-bold text-white text-4xl pt-2 mt-12 lg:text-5xl mb-2 font-gothamBlack">I'm a Junior Front-End Web Developer</h1>
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

            <div className="pt-36">
                <WavesOpacityElement fill="fill-white" topBottom="bottom-0" rotate="transform rotate-[180deg]"/>
            </div>
        </div>
    )
}
export default MyBio;