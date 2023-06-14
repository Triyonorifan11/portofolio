import Footer from "../../components/Footer";
import SectionAbout from "../../components/about";
import Banner from "../../components/banner";
import Draftportofolio from "../../components/draftportofolio";
import MyBio from "../../components/myBio";



function Home(){
    return(
        <>
        <Banner/>
        <SectionAbout/>
        <MyBio/>
        <Draftportofolio/>
        <Footer/>
      </>
    )
}

export default Home;