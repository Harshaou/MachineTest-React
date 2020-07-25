import React, { useState } from 'react';



const CarouselBox = () => {

    const [carousel, setCarousel] = useState(1)

    const dataOne = {name: 'Yoga and Pilate Training', type: 'TRAINING - FITNESS', 
    description: "This session is designed for all levels of trainees.This yoga and pillate training session is designed for all levels of trainees.This session is designed for all levels of trainees Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', price: '$80.00'}
    
    const dataTwo = {name: 'Spiritual Awekening Training', type: 'MENTAL - FITNESS', 
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. This session is designed for all levels of trainees.This yoga and pillate training session is designed for all levels of trainees.This session is designed for all levels of trainees ",
    image: 'https://images.unsplash.com/photo-1500904156668-758cff89dcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', price: '$90.00'}


    const renderItem = () => {
        if(carousel === 1) {
            return (
            <div className='carousel-box'>
            <div className='carousel-div'>
            <img style={{width: '100%', height: '100%'}} src={dataOne.image} alt=''/>
            </div>
            <div className='carousel-content'>
                <h2 className='carousel-h1'>{dataOne.name} </h2>
                <h4 className='carousel-h2'>{dataOne.type} </h4>
                <p className='carousel-p'> {dataOne.description} </p>
                <div className='carousel-price'>
                    <p style={{color: 'grey'}}>For one session</p>
                    <h3 style={{color: 'goldenrod'}}>{dataOne.price}</h3>
                </div>
            </div>
            </div>
                
            )
        } else  {
            return (
                <div className='carousel-box'>
                <div className='carousel-div'>
                <img style={{width: '100%', height: '100%'}} src={dataTwo.image} alt=''/>
                </div>
                <div className='carousel-content'>
                    <h2 className='carousel-h1'>{dataTwo.name}</h2>
                    <h4 className='carousel-h2'>{dataTwo.type} </h4>
                    <p className='carousel-p'>{dataTwo.description}</p>
                    <div className='carousel-price'>
                        <p style={{color: 'grey'}}>For one session</p>
                        <h3 className='goldenrod'>{dataTwo.price}</h3>
                    </div>
                </div>
                </div>
            )
        }
    }

    return (
        <div>
            {renderItem()}
            <div >
            <div className='dot-div'>
            <p onClick={() => carousel === 1 ? setCarousel(2) :  setCarousel(1)} style={{margin: 1, color:  'grey'}}>⬤</p>
            <p onClick={() => carousel === 1 ? setCarousel(2) :  setCarousel(1)} style={{margin: 1, color:  'grey'}}>⬤</p>
            </div>
            </div>
            </div>
    )
}


export default CarouselBox;
