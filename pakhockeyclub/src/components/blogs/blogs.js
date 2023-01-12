import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

function BlogSection ()  {
  
  return (
    <>
    <div className='container mt-5 mb-5 '>
        <h1 className='text-center mt-3'>
            Blogs
        </h1>
        <div className='row d-flex justify-Content-center mt-5 '>
            <div className='col-5  '>
                <img src='Assests/images/news1.jpg' className='' style={{width:'100%',height:'100%'}}>
                </img>
                <div className='col-10 border'>
                    <h3>
                        sustainable
                    </h3>
                    <p>
                    Card' is defined but never used no-unused-vars
                    Line 2:16:   'CardDeck' is defined but never used no-unused-vars
                    Line 2:26:   'Container' is defined but never used 
                    </p>
                </div>

            </div>
            <div className='col-5 '>
                <img src='Assests/images/news1.jpg' className=''  style={{width:'100%',height:'100%'}}>

                </img>
                <div className='col-10 border'>
                    <h3>
                        sustainable
                    </h3>
                    <p>
                    Card' is defined but never used no-unused-vars
                    Line 2:16:   'CardDeck' is defined but never used no-unused-vars
                    Line 2:26:   'Container' is defined but never used 
                    </p>
                </div>

            </div>

        </div>

    </div>
    </>
  );
}

export default BlogSection;