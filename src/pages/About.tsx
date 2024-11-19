import { teamData } from "./teamdata";

const About = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(51,65,85,0.4),rgba(51,65,85,0.4)), url(about-us.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <section>
            <div 
                style={divStyle} 
                className="w-full h-48 flex justify-center items-center object-fit-center md:h-60">
                <h1 className="text-center text-2xl font-bold text-white md:text-6xl">Who We Are</h1>
            </div>
            <div className="w-full flex flex-col items-center justify-around">
                <h2 className="text-center text-xl mb-4 mt-4 font-bold md:text-2xl">About Pretence Construction</h2>
                <p className="w-[95%] text-base md:text-xl md:w-[80%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem beatae nesciunt. Sit nobis, quidem, quaerat porro amet optio, alias adipisci harum magnam totam corporis quod tempora voluptates sed eos?
                    Quibusdam, culpa dignissimos fugiat adipisci quasi nesciunt voluptas dolores id incidunt, tempora ducimus aperiam voluptatum unde amet facere soluta odit consequuntur saepe pariatur consectetur? Fuga inventore blanditiis similique adipisci quasi?
                    Sit perspiciatis quae amet! Soluta tempora voluptate ex doloribus accusamus distinctio et magni atque, laudantium a cum provident, eaque porro consectetur quae culpa assumenda officiis, minus repellendus omnis. Ipsam, deserunt?
                </p>

                <p className="w-[95%] text-base md:text-xl md:w-[80%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempore nostrum, perferendis commodi eos facilis inventore molestias odio laborum, illo, rerum esse fugiat doloremque magnam? Natus esse ea ex beatae.
                    Laborum alias quos eveniet facilis hic sequi provident dolorem recusandae eligendi minus, culpa id. Odio placeat iusto amet, consectetur, similique quibusdam omnis impedit explicabo blanditiis ut ducimus minus reprehenderit maiores!
                    Quas consequuntur cum quisquam atque rem cupiditate architecto doloribus aperiam rerum, officia modi? Esse quam sequi ipsum. Ab sit atque veritatis. Voluptatem, totam consequatur. Quidem provident laborum adipisci facere voluptatibus.
                    Perferendis ullam, quis accusamus minus consequuntur, nulla ipsum, doloremque rem et temporibus placeat excepturi qui vel voluptatibus! Quaerat obcaecati veniam impedit cupiditate saepe ipsa necessitatibus temporibus, corporis cum, ex rem.
                </p>
            </div>
            <Team/>
            <History/>
    </section>
  )
}

function Team(){
    return(
        <div className="w-full flex flex-col items-center justify-around mt-4 mb-4"> 
            <h2 className="text-center text-2xl mb-4 mt-4 font-bold md:text-4xl">Our Team</h2>
            <ul className="w-full flex flex-wrap justify-center items-start">
                {teamData.map(data=>{
                    return(
                        <li key={data.id} className="w-[50%] h-84  flex flex-col items-center mb-4">
                            <img src={data.src} alt={data.alt} loading="lazy" className="w-[70%] h-[85%] shadow-xl  mt-2 object-fit-center rounded-md"/>
                            <strong className="mt-4 mb-2">{data.name}</strong> 
                            <span className="mb-2">{data.position}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
function History(){
    return(
        <div className="w-full flex flex-col items-center justify-around mb-4"> 
            <h2 className="text-center text-xl mb-4 mt-4 font-bold md:text-2xl">History of Pretence Construction</h2>
            
            <div className="w-full flex flex-col justify-between md:flex-row md:justify-between">
                
                <div className="w-[80%] md:w-[45%] ml-2">
                    <p className="w-[95%] ml-4 text-wrap text-base md:text-xl">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni animi, mollitia ratione ex eius voluptate provident, nisi modi non suscipit voluptas nihil! Voluptates dolor aperiam quam animi deleniti hic provident?
                        Corrupti nihil quae, adipisci placeat non deleniti et reiciendis distinctio fugiat ut, dolores eligendi soluta deserunt fugit dolorum nisi magnam quo. Repudiandae atque, tempora autem officiis dolore quod blanditiis placeat.
                        Voluptates illo tempore quaerat earum reiciendis eligendi iste ea nesciunt quae consequatur? Quas, doloribus repellendus id rerum quos sequi eos architecto? Aliquid perspiciatis dolores molestias soluta similique est iste doloremque.
                    </p>
                </div>
                <img src="./history.jpg" alt="history" loading="lazy" className="w-[80%] mr-2 sm:ml-2 shadow-2xl rounded-md h-80 object-fit-center md:w-[45%]"/>
            </div>
        </div>
    )
}
export default About