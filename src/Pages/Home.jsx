import React from 'react'
import {  Carousel } from 'react-bootstrap'
import Testimonials from './Testimonals'


 

function Home() {
  return (
    <div>
        
        <Carousel data-bs-theme='white'>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    style={{maxHeight:"100vh"}}
                    src={require('../components/Assets/corosel1.webp')}
                    alt='First slide' />
  
                
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    style={{maxHeight:"100vh"}}
                    src={require('../components/Assets/home-img1.jpg')}
                    alt='Second slide' />
                    
            </Carousel.Item>


            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    style={{maxHeight:"100vh"}}
                    src={require('../components/Assets/corosel2.webp')}
                    alt='three slide' />
                    
            </Carousel.Item>
            
        </Carousel>
        <Testimonials/>
        
    </div>
  )
}

export default Home