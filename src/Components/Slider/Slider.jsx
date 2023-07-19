import React from 'react'

import { Carousel } from 'react-bootstrap'


const Slider = () => {
  return (
    <>
        <Carousel>

        <Carousel.Item>
       {/* <ExampleCarouselImage text="First slide" />*/}
       <img
       src="https://firebasestorage.googleapis.com/v0/b/shop-72473.appspot.com/o/img1.jpg?alt=media&token=583878f5-a078-46d0-b474-4971fdd9ea15"
       alt='img1'
       />
       {/* 
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
  */}
        
      </Carousel.Item>


      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img
       src="https://firebasestorage.googleapis.com/v0/b/shop-72473.appspot.com/o/img2.jpg?alt=media&token=f5c85a11-9a12-4140-b537-0a53d83da887"
       /> 
       
       {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        */}

      </Carousel.Item>
      
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img
       src="https://firebasestorage.googleapis.com/v0/b/shop-72473.appspot.com/o/img3.jpg?alt=media&token=bca51b3d-1cf0-4cf8-b9d7-1c2c447ba0b0"
       alt='img3'
       />
       {/* 
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
    */}
      </Carousel.Item>


        </Carousel>
    
    </>
    )
  
}

export default Slider