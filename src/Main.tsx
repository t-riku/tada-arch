import React from 'react';
import News from './News';
import {Carousel} from 'react-bootstrap'
function Main() {
        return(
            <div>
            <Carousel>
            <Carousel.Item>
                <img
                 className="pic"
                 src="https://www.arttada.com/application/files/6414/7610/7000/1_squ.jpg"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                 className="pic"
                 src="https://www.arttada.com/application/files/6215/8808/1469/1.jpg"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                 className="pic"
                 src="https://www.arttada.com/application/files/4515/8808/3480/2.jpg"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                 className="pic"
                 src="https://www.arttada.com/application/files/4614/7610/6952/5_squ.jpg"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                 className="pic"
                 src="https://www.arttada.com/application/files/6714/7610/6901/1_squ.jpg"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                 className="pic"
                 src="https://www.arttada.com/application/files/9814/7610/6727/1_squ.jpg"
                />
            </Carousel.Item>
        </Carousel>

            <div className='main'>
                <h1>News</h1>
                
            </div>
            </div>
        )

        }
    
export default Main;