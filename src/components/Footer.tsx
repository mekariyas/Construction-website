
const Footer = () => {
  return (
    <footer className="w-full h-[40vh]">
        <section className='w-full bg-slate-700 h-[85%] flex justify-start items-center'>
            <div className="w-full flex flex-col justify-start ml-14">
                <h3 className="font-bold text-white text-xl md:text-3xl">Reach Out</h3>
                <p className=" text-white text-base md:text-xl">Call us <span className="underline">2239-1145 -222</span></p>
                <p  className=" text-white text-base md:text-xl">or email us at <span className="underline">Pretence@blahblah.com</span></p>
            </div>
        </section>
        <section className="flex flex-col items-center md:flex-row md:justify-between md:items-center h-20 w-full">
            <p className="ml-4">&copy; Pretence Construction Group</p>
            <ul className="flex  mr-4 ">
                <li className="border-r-[1px] border-black h-6 pl-2 pr-4">Privacy policy</li>
                <li className='ml-4 h-6  pr-2'>Terms and Conditions</li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer