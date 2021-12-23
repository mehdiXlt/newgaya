import './about.css'
import KOLEADER from '../../assets/img/koleader.jpg'
import GAYA from '../../assets/img/gaya.png'

const About =()=>{

    return (
        <section className='about section'>
            <div className='about__container'>
                <div className='koleader__section'>
                    <div className='koleader__data'>
                        <h3 className='koleader__title'>About KOLedeader</h3>
                        <span className='koleader__description'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nihil! Dignissimos provident voluptas praesentium libero, ea et explicabo doloremque quod expedita, iusto consectetur repellat porro maiores pariatur quo veritatis quis.
                        </span>
                        <br />
                        <span className='koleader__description2'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nihil! Dignissimos provident voluptas praesentium libero, ea et explicabo doloremque quod expedita, 
                        </span>

                        <ul className='koleader__social'>
                            <li>Fb</li>
                            <li>Insta</li>
                            <li>web site</li>
                        </ul>
                    </div>
                    
                        <img className='koleader__imge' alt='koeleader' src={KOLEADER}/>
                </div>

                {/* gaya section */}
                <div className='gaya__section'>
                    <div className='gaya__data'>
                        <h3 className='gaya__title'>About GAYA361</h3>
                        <span className='gaya__description'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nihil! Dignissimos provident voluptas praesentium libero, ea et explicabo doloremque quod expedita, iusto consectetur repellat porro maiores pariatur quo veritatis quis.
                        </span>
                        <span className='gaya__description2'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nihil! Dignissimos provident voluptas praesentium libero, ea et explicabo doloremque quod expedita, </span>

                        <ul className='gaya__social'>
                            <li>Fb</li>
                            <li>Insta</li>
                            <li>web site</li>
                        </ul>
                    </div>
                    
                    <div className='gaya__imge'>
                        <img alt='' src={GAYA} />
                    </div>
                </div>


                <div className='partner__section'>
                    <h2 className='partner__title'>Our Partners</h2>

                    <div className='partner__name'>
                        <span>ART in motion</span>
                        <span> Mcrea</span>
                        <span> MYCENE</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About