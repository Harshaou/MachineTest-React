import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FaHandshake } from 'react-icons/fa';

const CardBox = ({children, progress, title, name, place, profilePic}) => {
    return (
        <div className='card-box'>

            <div className='cardbox-firstrow'>
                <div>
                    <h3 className='goldenrod'>{title}</h3>
                    <p>10:22 am, 12/01/2019</p>
                </div>
                <div> 
                <ProgressBar variant="info" now={progress} />
                <div style={{display: 'flex'}}>
                    <p>Request</p>
                    <p className='marginRigtLeft'>Services</p>
                    <p>Payment</p>
                </div>              
            </div>      
            </div>

            <div className='cardbox-firstrow'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img className='profile-pic' src={profilePic} alt="pic"/>
                    <div style={{marginLeft: '15px'}}>
                        <h4 style={{color: '#0d9bb8'}}>{name}</h4>
                        <h6> {place} </h6>
                    </div>
                </div>

                <div className='deal-col'> 
                <FaHandshake  size={34} color="#0997b5" />
                <h6 style={{marginLeft: '10px', width: '80%'}}>You and {name} had 12 deals before</h6>
                </div>      
            </div>

            <div> {children} </div>

            
        </div>
    );
}

export default CardBox;
