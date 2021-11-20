import '../../App.css'
import Fade from 'react-reveal/Fade';
import femme from '../img/femme_gaya.png'
import { useNavigate } from 'react-router';
import LOGO from '../img/gaya_logo.png'


const Home =()=>{

    const navigate = useNavigate()

    return(
        <section className='home section'>

            <nav>
            <div className='header__left'> 
                <img src={LOGO} alt=''/>
            </div>
            </nav>

            <div className='home__container'>
                <div className='home__data'>
                    <div>
                        <div className='home-data'>
                            
                            <Fade left >
                                <span className='home__line'></span>
                                <h3 className='home__subtitle'>let's make something creative</h3>
                            </Fade>
                        </div>
                        <div>
                            <Fade right >
                                <h1 className='home__title'>
                                   <span>D</span>
                                   <span>e</span>
                                   <span>v</span>
                                   <span>e</span>
                                   <span>l</span>
                                   <span>o</span>
                                   <span>p</span>
                                   <span>m</span>
                                   <span>e</span>
                                   <span>n</span>
                                   <span>t</span>
                                   <span>.</span>
                                </h1>
                            </Fade>
                        </div>
                    </div>
                    <div className='home__img' >
                        <Fade bottom>
                        <img src={femme} alt=''/>
                        </Fade>
                    </div>
                    
                </div>

                <div className='home__links'>
                            <button className='link__buton' onClick={()=> {navigate("/about")}}>About Us</button>
                            <button className='link__buton' onClick={()=> {navigate("/service")}}>Service</button>
                            <button className='link__buton' onClick={()=> {navigate("/portfolio")}}>Portfolio</button>
                            <button className='link__buton' onClick={()=> {navigate("/contact")}}>Contact</button>
                </div>
            </div>

        </section>
    )
}

export default Home