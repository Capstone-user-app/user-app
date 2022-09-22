import React from "react";
import Footer from "./footer";
import { useState } from "react";


function Homepage() {
    
    const background_0_container = {
        position: 'relative',
        width: '100%',
        height: '759px',
        backgroundColor: '#173554',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    const background_1_container = {
        width: '100%',
        position: 'relative',
        backgroundColor: '#fcf7f8',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    const background_2_container = {
        width: '100%',
        position: 'relative',
        backgroundColor: '#173554',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
  
    const shape_left_0 = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: '0px',
      Marginbottom: '0px',
      backgroundColor: '#33cccc',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      clipPath: "polygon(0 68%, 0 100%, 100% 100%)",
    };
  
    const text_0 = {
      fontFamily: 'Open Sans',
      fontWeight: '400',
      fontSize: '48px',
      color: '#FFFFFF',
      paddingTop: '100px',
      paddingLeft: '30%',
      lineHeight: '72px',
      textAlign: 'center',
    };

    const text_1 = {
        fontFamily: 'Open Sans',
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '32px',
        color: '#777777'
    };

    const text_2 = {
        fontFamily: 'Manrope',
        fontWeight: '400',
        fontSize: '48px',
        lineHeight: '72px',
        textAlign: 'center',
        color: '#000000',
    };

    return (
        <div className="overflow-y-auto">
        <div style={background_0_container} className='grid grid-cols-2 justify-items-center items-center'>
          <div style={shape_left_0}></div>
    
            <div className='grid grid-rows-2 justify-items-center items-center'>
                <div style={text_0}> Acercamos tus tiendas favoritas a tu hogar</div>
                <div className='self-start mt-10 ml-20'>
                  <button className='text-black font-bold py-2 px-8 rounded-full ml-40' style={{backgroundColor: '#fcf7f8'}}>
                    Comenzar
                  </button>
                </div>
            </div>
    
              <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/352px-Map_pin_icon.svg.png' alt="Map icon" style={{width: "60%", marginBottom: "100px"}}></img>
              </div>
        </div>

        <div style={background_1_container} className='h-screen grid grid-rows-2'>

            <div className='grid grid-rows-2 justify-items-center items-center'>
                <p style={text_1} className='self-end'>
                    Tiendas Asociadas
                </p>
                <p style={text_2} className='self-start max-w-3xl'>
                    Las mejores tiendas para que puedas disfrutar tu compra
                </p>
            </div>

            <div className='grid grid-cols-4 justify-items-center items-center self-center justify-self-center'>
                
                <img src='https://www.lippioutdoor.com/static/version1662617172/frontend/Linets/Lippi/es_AR/images/logo.png' alt="Lippi" style={{width: "60%", marginBottom: "100px"}}></img>


                <img src='https://seeklogo.com/images/W/WD-40-logo-6D2AF08362-seeklogo.com.png' alt="Map icon" style={{width: "60%", marginBottom: "100px"}}></img>
            

            
                <img src='https://www.hakahonu.cl/static/version1662617172/frontend/Linets/HakaHonu/es_AR/images/logo.png' alt="Haka Honu" style={{width: "60%", marginBottom: "100px"}}></img>
            

            
                <img src='https://geography.cl/media/logo/stores/6/logo-geo_1.png' alt="Geography" style={{width: "60%", marginBottom: "100px"}}></img>
            

            
                
            
            </div>
            

        </div>

        <div style={background_2_container} className='h-screen'>

        </div>
        <Footer/>
    </div>





      );


}
export default Homepage;
