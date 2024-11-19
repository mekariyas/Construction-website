import { FaHelmetSafety } from "react-icons/fa6";
import { GrSchedule } from "react-icons/gr";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";


const Home = () => {
    const sectionStyle={
        backgroundImage: `linear-gradient(rgba(51,65,85,0.3),rgba(51,65,85,0.3)) ,url(Landing-Image.jpg)`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
  return (
    <>
        <section className="w-full h-[100vh] flex flex-col justify-center items-center" style={sectionStyle}>
            <h1 className="w-full h-1/4 drop-shadow-md text-white text-center text-3xl font-bold md:text-8xl">Pretence Construction Firm</h1>
            <p className="text-white drop-shadow-lg text-center text-2xl md:text-4xl">We make your dream project a reality</p>
            <div className="text-white w-[80%] mt-6 h-16 flex justify-center items-center space-x-6">
              <Link to="/Projects" className="border-[1px] border-white w-36 h-10 text-center pt-2 pb-2 rounded-md bg-slate-700 hover:shadow-md hover:shadow-slate-50 transition-shadow duration-100 ease-in-out  bg-opacity-70 font-medium">See Our Work</Link> 
              <Link to="/Contact" className="border-[1px] border-white w-36 h-10 text-center pt-2 pb-2 rounded-md bg-slate-700 bg-opacity-70 hover:shadow-md hover:shadow-slate-50 transition-shadow duration-100 ease-in-out font-medium">Contact Us</Link>
            </div>
        </section>
        <section className="w-full mt-10  flex flex-col items-center mb-10">
          <div className="w-10/12">
              <h1 className="w-full h-10 drop-shadow-md  text-center text-2xl font-bold md:text-4xl">Pretence Construction</h1>
              <h2 className="w-full h-10 drop-shadow-md  text-center text-2xl font-bold md:text-4xl">Building trust through exceptional craftsmanship</h2>
              
              <p className="w-[90] md:w-[80%] ml-10  text-base md:text-xl md:ml-20 mt-10 text-wrap">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatum reprehenderit eos repudiandae deserunt sequi fuga cumque consectetur rerum aliquam beatae sapiente modi voluptate est nam, mollitia officiis pariatur enim?
                Consectetur dolore optio aliquid dolor reprehenderit, explicabo soluta eveniet aut temporibus nesciunt? Consequatur distinctio, amet veritatis reiciendis fugiat iste minus recusandae optio voluptas nihil. Atque vel sint mollitia quisquam sapiente.
                Debitis atque accusamus vitae accusantium quaerat minus ipsa ea, doloribus aperiam blanditiis dolorum distinctio porro aspernatur cumque laudantium voluptatem aliquid dolorem repudiandae itaque fugit rerum incidunt? Beatae itaque voluptatum in?
              </p>
              <Link to="about-us" className="w-[90] h-4 ml-24 mt-10 text-base md:text-xl  font-bold hover:underline">Learn more about our team {">>"} </Link>
          </div>
        </section>

        {/*What we do */}
        <section className="mt-10">
          <h1 className="w-full h-10 drop-shadow-md mb-4 text-center text-2xl font-bold md:text-4xl">What We Do</h1>
          <Capabilities/>
        </section>

        {/*Our Qualities */}
        <section className="mt-10 mb-10">
          <h1 className="w-full h-10 drop-shadow-md  text-center text-2xl font-bold md:text-4xl">Our Qualities</h1>
          <Qualities/>
        </section>
    </>
  )
}

function Capabilities(){
  const imgSrc = [
    {
      src: "./capabilities/Housing.jpg",
      alt: "Housing",
    },
    {
      src: "./capabilities/road.jpg",
      alt: "Road",
    },
    {
      src: "./capabilities/apartment.jpg",
      alt: "Apartment",
    },
    {
      src: "./capabilities/skyScraper.jpg",
      alt: "skyScraper",
    },
  ]
  return(
  <ul className="w-full flex flex-col items-center space-y-4 justify-around md:flex-row md:justify-around flex-wrap">
    {imgSrc.map((img,id)=>{
      return(
        <li key={id} className="w-[80%] h-80 md:w-[45%] shadow-2xl">
          <img src={img.src} className="w-full h-full object-cover rounded-md" alt={img.alt} loading="lazy"/>
        </li>)
    })}
  </ul>)
}

function Qualities(){
  const items=[
    {
      icon: <FaHelmetSafety className=" w-[50%] h-[50%]"/>,
      title: "Committed to Safety",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a ex odit voluptatibus aliquid. Tempore illo sint, aliquam ipsum quasi voluptate tempora repellendus odit fugiat! Similique alias voluptatum deleniti dolores!"
    },
    { 
      icon: <GrSchedule className=" w-[50%] h-[50%]"/>,
      title:"On Schedule",
      body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a ex odit voluptatibus aliquid. Tempore illo sint, aliquam ipsum quasi voluptate tempora repellendus odit fugiat! Similique alias voluptatum deleniti dolores!"
    },
    {
      icon: <RiMoneyDollarCircleFill className="w-[50%] h-[50%]"/>,
      title:"On Budget",
      body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a ex odit voluptatibus aliquid. Tempore illo sint, aliquam ipsum quasi voluptate tempora repellendus odit fugiat! Similique alias voluptatum deleniti dolores!"
    },
    {
      icon: <FaHandshake className=" w-[50%] h-[50%]"/>,
      title:"RelationShip Focused",
      body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a ex odit voluptatibus aliquid. Tempore illo sint, aliquam ipsum quasi voluptate tempora repellendus odit fugiat! Similique alias voluptatum deleniti dolores!"
    }
  ]
  return(
  <ul className="w-full flex flex-col items-center space-y-8 justify-around md:flex-row md:justify-around flex-wrap">
    {items.map((item,id)=>{
      return(
      <li key={id} className="w-[80%] md:w-[30%] flex flex-col items-center shadow-2xl rounded-lg">
        <div className="flex items-center justify-center w-[80%] h-[50%]">{item.icon}</div>
        <strong className="mt-4 mb-2 text-base md:text-xl">{item.title}</strong>
        <p className="w-[70%] mb-2  text-base md:text-xl text-wrap">{item.body}</p>
      </li>)
    })}
  </ul>)
}
export default Home