import CardPortofolio from "./cardcomponen";


function DraftportofolioAll(props){
    const data = props.dataporto

    return (
        <div className="container">
            <div  data-aos="zoom-in-up"className="flex justify-center pt-14">
                <h1 className="block font-bold text-primary text-4xl pt-2 lg:text-4xl my-6 font-gothamBlack">My Portofolio</h1>
            </div>
            <div className="flex flex-wrap overflow-hidden py-9">
                
            {data?.map(elemen => <CardPortofolio key={elemen.id} gambar={elemen.gambar} title={elemen.title} deskripsi={elemen.deskripsi} linkhref={elemen.link} />)}
                
            </div>
        </div>
    )
}

export default DraftportofolioAll;