import '../App.css'
import Koleader from '../assets/img/koleader.jpg'

const Home = ()=>{

    return(
        <div className='home section'>
            <div className='left__home'>
                <div className='home__nav'>
                    <div className='logo'>
                        <span className='LOGO'>K O L</span>
                    </div>
                    <div className='line'></div>
                    <div className='nav__links'>
                        <ul>
                            <li>Home</li>
                            <li>Service</li>
                            <li>About</li>
                            <li>Contact Us </li>
                        </ul>
                    </div>
                </div>

                {/* end of home nav */}

                <div className='main__home'>
                    <div className='home__container'>
                        <h1 className='home__title'> BOOKING AND <br /> ARTIST <br /> MANAGMENT.</h1>
                        <span className='home__subtitle'>find your favorite influencer</span>
                        <a className='home__button' herf='#artists'> Take a look </a>
                    </div>
                </div>
            </div>

            <div className='right__home'>
                <div className='home__illustration'>
                    <img className='koleader__img' alt=''src={Koleader}/>
                </div>
            </div>
        </div>
    )
}

export default Home