import '../App.css'
import { useNavigate } from 'react-router'

const Artists =(props)=>{
    const navigate = useNavigate()

    return(
        <div className='Artists section' id='artists'>
            <div className='artists__container'>
                <h3 className='artists__title'> ARTISTS</h3>
            </div>

            <div className='artists__content'>
                {props.influenceur.map(e=>{
                    return(
                        <div className='artists__card' onClick={ ()=>{
                            navigate(`/detail/${e.id}`)
                        }}>
                            <img className='influencer_img' src={`/img/${e.url_img}`}></img>
                            <span className='card__title'>{e.instaName}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Artists