import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import DraftportofolioAll from "../../components/allPortofolio";

function Portofolio(){
  const [data, setData] = useState()
    const dataPortofolio = () => {
        fetch('data/dataPortofolio.json')
    .then((respose) => {return respose.json()})
    .then((res) => {
         setData(res.daftarPortofolio)})
    }
    
    useEffect(() => {
        dataPortofolio();
    }, [])
    return(
        <>
        <DraftportofolioAll dataporto={data}/>
        <Footer/>
      </>
    )
}

export default Portofolio;