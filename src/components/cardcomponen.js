function CardPortofolio(props){
    return(
  <div data-aos="zoom-in-up" className="w-full self-start px-5 md:w-1/2 lg:w-1/3 lg:mb-5 mb-10">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <a href={props.linkhref} rel="noopener noreferrer" target="_blank" >
              <img className="rounded-t-lg h-72 object-cover object-left" src={`./images/${props.gambar}`} alt="" />
          </a>
          <div className="p-5">
              <a href={props.linkhref} rel="noopener noreferrer" target="_blank" >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">{props.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.deskripsi}</p>
              <a href={props.linkhref} rel="noopener noreferrer" target="_blank" className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-primary rounded-full hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                  View Web
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
          </div>
      </div>
  </div>
    )
  }

  export default CardPortofolio;