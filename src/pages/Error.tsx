import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="w-full h-[100vh] flex flex-col justify-center items-center">
        <h1 className="w-[80%] h-10 text-xl md:text-2xl font-bold text-center">OOps! an Error occurred</h1>
        <div className="w-[80%] md:w-[55%] h-[60%] flex justify-center items-center mt-8">
            <img src="./Error/Error.jpg" alt="error" className="w-[85%] h-[100%] object-center" loading='lazy'/>
        </div>
        <p>Click <Link to="/" className="text-base md:text-lg mt-4 font-bold underline">Here</Link> to go back to homepage</p>
    </section>
  )
}

export default Error