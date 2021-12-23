import './App.css'
import Artists from './components/artists'
import Footer from './components/footer'
import Home from './components/home'
import About from './components/about/about'


const App =()=>{
    // influencer data base
    const influenceurs=[
        {
          'id':1,
          'instaName':'lyna_aridj',
          'Followers':"28.2K",
          'type':'lifeStyle',
          'publications':10,
          'url_img':'lyna_aridj.png',
          'insta_path':'https://www.instagram.com/lyna_aridj/?fbclid=IwAR36jNx9rzOqBx_L9HcZLnYf3phtOrhYmDWT28HSGrtKn7kB_qJJeigNPWw',
        },
        {
          'id':2,
          'instaName':'dastan_gramm.official',
          'Followers':"767",
          'type':'lifeStyle',
          'publications':88,
          'url_img':'dastan_gramm.png',
          'insta_path':'https://www.instagram.com/dastan_gramm.official/?fbclid=IwAR11trByrGhmKYmHl_F0X4EFVwsRH-ctS1KJF1C0sS0_0VV0CXfRzvRBd10',
        },
        {
          'id':3,
          'instaName':'yaramammo',
          'Followers':"6708",
          'type':'lifeStyle',
          'publications':101,
          'url_img':'yaramammo.png',
          'insta_path':'https://www.instagram.com/yaramammo/?fbclid=IwAR1md6xMcr3KKXSw3nVPwY5hxE_DkvIg2UMRcrsWFJZMy1KE4ZuuPouiksk',
        },
        {
          'id':4,
          'instaName':'karim_semcha',
          'Followers':"13.9K",
          'type':'lifeStyle',
          'publications':43,
          'url_img':'karim_semcha.png',
          'insta_path':'https://www.instagram.com/karim_semcha/?fbclid=IwAR3RWM3xDcLfxfnaYBEqqA9o-Jp4rNjIxYqlVJWY1ljrtCJY_Ib4ZlKY9F0',
        },
        {
          'id':5,
          'instaName':'mounir_bouhi_',
          'Followers':"8 432",
          'type':'Fashion',
          'publications':144,
          'url_img':'mounir_bouhi.png',
          'insta_path':'https://www.instagram.com/mounir_bouhi_/?fbclid=IwAR0LTkVOkqL90mkS9j4qSVNUGxPtMry-1LbnJgtcXvua2GdbHiAAW9SHq2E',
        },
        {
          'id':6,
          'instaName':'abdelwahab.hamma.7',
          'Followers':"5 913",
          'type':'Acteur',
          'publications':43,
          'url_img':'abdelwahab_hamma.png',
          'insta_path':'https://www.instagram.com/abdelwahab.hamma.7/?fbclid=IwAR0CnZ2GtDbPwMNByUTropZuhaDmRtFN8rXUDFXalqc6e4rsuLWP2aGgPE4',
        },
        {
          'id':7,
          'instaName':'abdelmounai_m',
          'Followers':"12.1K",
          'type':'Artiste',
          'publications':262,
          'url_img':'abdelmounai_m.jpg',
          'insta_path':'https://www.instagram.com/abdelmounai_m/?fbclid=IwAR3Q4PpNb1b5ptd2jqrHRTZ2OgEKtBaObNAj5JEFmVad_zk3EhWPRuiPHaI',
        },
        {
          'id':8,
          'instaName':'lemkach_red',
          'Followers':"25.2K",
          'type':'Mannequin',
          'publications':146,
          'url_img':'lemkach_red.png',
          'insta_path':'https://www.instagram.com/lemkach_red/?fbclid=IwAR1J09GwBAJXxmiAd9PVkpv_34vcbAXqhrDMN-yGY_FKrWA667je_kn8db8',
        },
        {
          'id':9,
          'instaName':'youssra_azeb',
          'Followers':"8 465",
          'type':'LifeStyle',
          'publications':71,
          'url_img':'yousra_azeb.png',
          'insta_path':'https://www.instagram.com/youssra_azeb/?fbclid=IwAR1NmtfL0nr2oDTKLG1rW8E2Bs56ySOzzAIAkFEXiRTyR6fHu28sbHKH2so',
        },
        {
          'id':10,
          'instaName':'maome_moha_oughlis1',
          'Followers':"1 054",
          'type':'LifeStyle',
          'publications':243,
          'url_img':'maome_moha_oughlis.png',
          'insta_path':'https://www.instagram.com/maome_moha_oughlis1/?fbclid=IwAR11trByrGhmKYmHl_F0X4EFVwsRH-ctS1KJF1C0sS0_0VV0CXfRzvRBd10',
        },
        {
          'id':11,
          'instaName':'abdennour_bendjeddou',
          'Followers':"7 529",
          'type':'Mannequin',
          'publications':84,
          'url_img':'abdnour_bendjeddou.png',
          'insta_path':'https://www.instagram.com/abdennour_bendjeddou/?fbclid=IwAR09HQv273LVP66L5To4-R-sA7T2aUCvnRlkAjadQwF570cg2DXbezGkgGc',
        },
        {
          'id':12,
          'instaName':'creatina___',
          'Followers':"9 302",
          'type':'Cuisine',
          'publications':46,
          'url_img':'creatina.png',
          'insta_path':'https://www.instagram.com/creatina___/?fbclid=IwAR26ruyt_8IWXfZbvjmI9LsUw9NYrp0lolscvcaKX9DZ6pTRJ6LoEx71fD8',
        },
        {
          'id':13,
          'instaName':'zakaria_karaouet',
          'Followers':"33.4K",
          'type':'Acteur',
          'publications':37,
          'url_img':'zakaria_karaouet.png',
          'insta_path':'https://www.instagram.com/zakaria_karaouet/?fbclid=IwAR3Q4PpNb1b5ptd2jqrHRTZ2OgEKtBaObNAj5JEFmVad_zk3EhWPRuiPHaI',
        },
        {
          'id':14,
          'instaName':'univers_de_nihad',
          'Followers':"147K",
          'type':'Blogeuse',
          'publications':285,
          'url_img':'nihad_andelaziz.png',
          'insta_path':'',
        },
    
    
    ]
    /////////////

    return(
        <div className='App'>
           {/* <Home /> */}
           {/* <Artists influenceur={influenceurs}/> 
           <Footer /> */}

           <About />
        </div>
    )
}

export default App