import '../../App.css'
import Black1 from '../img/boy.jpg'
// import Black2 from '../img/black2.jpg'
// import Black3 from '../img/black3.jpg'



const Portfolio =()=>{

    return(
        <section className='portfolio section'>
            <div className='portfolio__container'>
                <div>
                    <h2 className='portfolio__title'> Our Portfolio</h2>
                </div>

                <div className='portfolio__content'>

                    <div className='portfolio__left'>
                        <h1 className='left__title'>Lorem</h1>
                        <span className='left__description'>Lorem upsum....</span>
                    </div>


                    <div className='portfolio__right'>
                        <div className='box__column'>
                         

                            {/* box image */}
                            <div className='box'>
                                <div className='front'>
                                    <img src={Black1} alt=''/>
                                </div>

                                <div className='back'>
                                    <h2 className='box__title'>Lorem </h2>
                                    <p className='box__description'>Lorem ipsum dolor sit amet consectetur adipiscing</p>
                                </div>
                            </div>

                            {/* box image */}
                            <div className='box'>
                                <div className='front'>
                                    <img src={Black1} alt=''/>
                                </div>

                                <div className='back'>
                                    <h2 className='box__title'>Lorem </h2>
                                    <p className='box__description'>Lorem ipsum dolor sit amet consectetur adipiscing</p>
                                </div>
                            </div>
                        </div>

                        <div className='box__column'>

                            {/* box image */}
                            <div className='box'>
                                <div className='front'>
                                    <img src={Black1} alt=''/>
                                </div>

                                <div className='back'>
                                    <h2 className='box__title'>Lorem </h2>
                                    <p className='box__description'>Lorem ipsum dolor sit amet consectetur adipiscing</p>
                                </div>
                            </div>

                            {/* box image */}
                            <div className='box'>
                                <div className='front'>
                                    <img src={Black1} alt=''/>
                                </div>

                                <div className='back'>
                                    <h2 className='box__title'>Lorem </h2>
                                    <p className='box__description'>Lorem ipsum dolor sit amet consectetur adipiscing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio