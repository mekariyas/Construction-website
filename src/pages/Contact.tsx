import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(51,65,85,0.4),rgba(51,65,85,0.4)), url(work-withus.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <section>
            <div 
                style={divStyle} 
                className="w-full h-48 flex justify-center items-center object-fit-center md:h-60">
                <h1 className="text-center text-xl font-bold text-white md:text-6xl">Work With Us</h1>
            </div>
            
            <div className="mt-10 w-full flex flex-col md:w-[90%] md:flex-row md:justify-around">
                <Form /> 
                <Address />
            </div>
        </section>
    );
};

function Form() {
    return (
        <div className="w-full md:w-[40%] mb-4">
            <h2 className="font-bold text-2xl  text-center w-full md:text-left md:text-3xl mb-4">Let's get started.</h2>
            <form className="w-full flex flex-col">
                {/* Name */}
                <div className="flex flex-col mb-4 pl-3">
                    <label htmlFor="name" className="mt-4 after:content-['*'] after:text-red-600">NAME</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="w-[70%] md:w-full h-10 pl-2 border-[1px] border-slate-400" 
                        required 
                    />
                </div>

                {/* Company */}
                <div className="flex flex-col mb-4 pl-3">
                    <label htmlFor="company" className="mt-4">COMPANY</label>
                    <input 
                        type="text" 
                        id="company" 
                        className="w-[70%] md:w-full h-10 pl-2 border-[1px] border-slate-400" 
                        required 
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col mb-4 pl-3">
                    <label htmlFor="email" className="mt-4 after:content-['*'] after:text-red-600">EMAIL</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="w-[70%] md:w-full pl-2 h-10 border-[1px] border-slate-400" 
                        required 
                    />
                </div>

                {/* Phone */}
                <div className="flex flex-col mb-4 pl-3">
                    <label htmlFor="phone" className="mt-2">PHONE</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        className="w-[70%] md:w-full h-10 pl-2 border-[1px] border-slate-400" 
                        required 
                    />
                </div>

                {/* Interest */}
                <div className="flex flex-col mb-4 pl-3">
                    <label htmlFor="interest" className="mt-4 mb-2 after:content-['*'] after:text-red-600">I'M INTERESTED IN...</label>
                    <select id="interest" className="w-[70%] md:w-full h-10 pl-2 border-[1px] border-slate-400">
                        <option>Career opportunities</option>
                        <option>Becoming a trade partner</option>
                        <option>Working together on a project</option>
                        <option>Other</option>
                    </select>
                </div>

                {/* Additional Comments */}
                <div className="flex flex-col mb-4">
                    <label htmlFor="comments" className="mt-4 pl-3">Additional Comments</label>
                    <textarea 
                        id="comments" 
                        name="comments" 
                        rows={10} 
                        cols={10} 
                        className="pl-2 mt-4 border-[1px] border-slate-400" 
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="w-full flex justify-center">
                <input 
                    type="submit" 
                    value="Submit" 
                    className="mt-2 text-xl md:text-2xl mb-2 h-10 w-24 bg-slate-800 text-white border-[1px] border-slate-400" 
                />
                </div>
            </form>
        </div>
    );
}

function Address() {
    return (
        <div className="w-full md:w-[40%] pl-3">
            <div>
                <img src="./main-office.jpg" alt="main-office" className="w-80 h-80 object-fit-center mb-6" loading="lazy"/>
            </div>
            <div className="mb-4">
                <h2 className="font-bold text-base md:text-3xl">Pretence Construction Group</h2>
                <ul className="list-none space-y-2">
                    <li className="flex items-center">
                        <FaLocationDot className="mr-2" />
                        <span>1234, blah blah street, Addis Ababa</span>
                    </li>
                    <li className="flex items-center">
                        <FaLocationDot className="mr-2" />
                        <span>8402, blah blah street, Bahir Dar</span>
                    </li>
                    <li className="flex items-center">
                        <FaLocationDot className="mr-2" />
                        <span>4219, blah blah street, Hawassa</span>
                    </li>
                    <li className="flex items-center">
                        <BsFillTelephoneFill className="mr-2" /> 
                        <span>2239-1145 -222</span>
                    </li>
                    <li className="flex items-center">
                        <MdEmail className="mr-2" /> 
                        <span>Pretence@blahblah.com</span>
                    </li>
                    <li className="flex items-center">
                        <FaFacebookF className="mr-2" />  
                        <FaLinkedin />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
