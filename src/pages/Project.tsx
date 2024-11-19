import { progressData } from "./progressdata";
import { useState } from "react";

const Project = () => {
    
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(51,65,85,0.4),rgba(51,65,85,0.4)), url(Projects.jpg)`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <section>
        <div 
            style={divStyle} 
            className="w-full h-48 flex justify-center items-center object-fit-center md:h-60">
                <h1 className="text-center text-xl font-bold text-white md:text-6xl">Our Projects</h1>
        </div>
        <Projects/>
    </section>
  )
}
function Projects(){
    const [items, setItems] = useState<string>("All")
    return(
        <div className="w-full mt-4">
            <form >
                <select onChange={e=> setItems(e.target.value)}
                className="w-60 ml-8 ring-none focus:outline-none border-[1px] border-black">
                    <option value="All">All Projects</option>
                    <option value="Completed">Completed</option>
                    <option value="inProgress">In progress</option>
                </select>
            </form>
            <ul className="w-full flex flex-wrap justify-around items-around mt-4 space-y-6 mb-4">
                {items==="Completed"? progressData.filter(data=> data.status ==="Completed").map(data=>{
                    return(
                        <li key={data.id} className="w-full md:w-[45%] h-[85vh] flex flex-col justify-between items-center mb-2 mt-4 shadow-2xl rounded-lg">
                            <img  src={data.src} alt={data.alt} className="w-[85%] h-[75%] mt-4 mb-4 rounded-md"  loading="lazy"/>
                            <div className="w-full flex flex-col mb-2 pl-12">
                                <strong>Project Name: {data.projectName}</strong>
                                <span><strong>Address:</strong>{' '}<em>{data.projectAddress}</em></span>
                                <strong>Status: {data.status}</strong>
                            </div>
                        </li>
                    )
                }):items==="inProgress"? progressData.filter(data=>data.status==="In progress").map(data=>{
                    return(
                        <li key={data.id} className="w-full md:w-[45%] h-[85vh] flex flex-col justify-between items-center mb-2 mt-4 shadow-2xl rounded-lg">
                            <img  src={data.src} alt={data.alt} className="w-[85%] h-[75%] mt-4 mb-4 rounded-md"  loading="lazy"/>
                            <div className="w-full flex flex-col mb-2 pl-12">
                                <strong>Project Name: {data.projectName}</strong>
                                <span><strong>Address:</strong>{' '}<em>{data.projectAddress}</em></span>
                                <strong>Status: {data.status}</strong>
                            </div>
                        </li>
                    )
                }): progressData.map(data=>{
                    return(
                        <li key={data.id} className="w-full md:w-[45%] h-[85vh] flex flex-col justify-between items-center mb-2 mt-6 shadow-2xl rounded-lg">
                            <img  src={data.src} alt={data.alt} className="w-[85%] h-[75%] mt-4 mb-4 rounded-md"  loading="lazy"/>
                            <div className="w-full flex flex-col mb-2 pl-12">
                                <strong>Project Name: {data.projectName}</strong>
                                <span><strong>Address:</strong>{' '}<em>{data.projectAddress}</em></span>
                                <strong>Status: {data.status}</strong>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Project