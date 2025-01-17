import { Link } from "react-router-dom";
import CardPortofolio from "./cardcomponen";


function Draftportofolio(){
    
    const daftarPortofolio = [
        {
            id: 1,
            title: "Web Pelayanan Baznas",
            deskripsi: "Website untuk penggalangan dana masyarakat Kabupaten Madiun. Website ini dalam pengembangan mulai dari program Praktek Kerja Lapangan.",
            gambar : "Slide1.png",
            link: "https://service.baznasmadiun.id"
        },
        // {
        //     id: 2,
        //     title: "Web Pelayanan Dashboard Admin",
        //     deskripsi: "Website untuk pengelolaan CMS di web pelayanan. Web khusus untuk pengurus admin Baznas Kabupaten Madiun",
        //     gambar : "Slide2.png",
        //     link: "https://dashboard-admin.baznasmadiun.id/"
        // },
        // {
        //     id: 3,
        //     title: "Web Company Profile Craxion",
        //     deskripsi: "Website company profile Craxion. Projek pertama kali saya buat.",
        //     gambar : "Slide3.png",
        //     link: "https://craxion.netlify.app/"
        // },
        // {
        //     id: 4,
        //     title: "Reforma Trash Project",
        //     deskripsi: "Website Project Studi Independen Batch 3 - Dicoding. Best Capstone Kategori Solusi Konservasi dan Pengelolaan Sumber Daya Alam",
        //     gambar : "Slide4.png",
        //     link: "https://reforma-trash.netlify.app/"
        // },
        // {
        //     id: 5,
        //     title: "Website CockTail API",
        //     deskripsi: "Website Assignment tentang fetch API. Data api berupa cocktail. Hasil belajar Studi independen batch 3 - Dicoding",
        //     gambar : "Slide5.png",
        //     link: "https://coctaildevelopment.netlify.app/"
        // },
        // {
        //     id: 6,
        //     title: "Website Pixel's Resto",
        //     deskripsi: "Website Assignment tentang fetch PWA dan melakukan testing. Data api berupa kumpulan restaurant. Hasil belajar Studi independen batch 3 - Dicoding",
        //     gambar : "Slide6.png",
        //     link: "https://resto-pixel.netlify.app/"
        // },
        {
            id: 7,
            title: "Website ColexiIn",
            deskripsi: "Website Final Project 1 Studi Independen Batch 4 tentang website CRUD. Website ecommmerce thrifting. Menggunakan database firebase",
            gambar : "Slide7.png",
            link: "https://colexiin.netlify.app/"
        },
        {
            id: 8,
            title: "Slicing Desain Start-Up",
            deskripsi: "Website slicing tentang start-up dari desain figma. Website final project 2 Studi Independen Batch 4 - Hacktiv8.",
            gambar : "Slide8.png",
            link: "https://fp2-group2.netlify.app/"
        },
        {
            id: 9,
            title: "Slicing Desain Digital Marketing",
            deskripsi: "Website slicing tentang digital marketing dari desain figma. Website final project 3 Studi Independen Batch 4 - Hacktiv8.",
            gambar : "Slide9.png",
            link: "https://fp3-group3.netlify.app/"
        },
        {
            id: 10,
            title: "Website games QuizzMee",
            deskripsi: "Website game kuis. Kuis berisi kategori pengetahuan umum, komputer sains, hewan. Website berbahasa inggris. Website final project 4 Studi Independen Batch 4 - Hacktiv8.",
            gambar : "Slide10.png",
            link: "https://quizz-mee.netlify.app/"
        },
        // {
        //     id: 11,
        //     title: "Website Assignmen 1",
        //     deskripsi: "Website hasil assignment 1 dalam menerapkan css framework bootstrap. Website final project 4 Studi Independen Batch 4 - Hacktiv8.",
        //     gambar : "Slide11.png",
        //     link: "https://riyo-assignment1-hacktiv8.netlify.app/"
        // },
        {
            id: 12,
            title: "Website Assignmen 3",
            deskripsi: "Website hasil assignment 3 dalam menerapkan fetch API dari data Codiv-19 global. Website final project 4 Studi Independen Batch 4 - Hacktiv8.",
            gambar : "Slide12.png",
            link: "https://assignment3-rifan-hacktiv8.netlify.app/"
        },
    ]

    return (
        <div className="container">
            <div data-aos="zoom-in-up" className="flex justify-center">
                <h1 className="block font-bold text-primary text-4xl pt-2 lg:text-4xl my-6 font-gothamBlack">My Portofolio</h1>
            </div>
            <div className="flex flex-wrap overflow-hidden py-9">
                
                {daftarPortofolio.map(elemen => <CardPortofolio key={elemen.id} gambar={elemen.gambar} title={elemen.title} deskripsi={elemen.deskripsi} linkhref={elemen.link} />)}
                
            </div>
            <div className="flex justify-center py-9 mb-7">
                <Link to="/portofolio" className="font-semibold text-base text-white bg-primary px-7 py-3 hover:bg-opacity-90 shadow-xl transition duration-100 ease-in-out focus:border-none rounded-full">More my project</Link>
            </div>
        </div>
    )
}

export default Draftportofolio;