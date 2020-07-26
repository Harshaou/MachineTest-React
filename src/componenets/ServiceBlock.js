import React from 'react';
import { GoLocation } from 'react-icons/go';
import { AiOutlineClockCircle } from 'react-icons/ai';

const ServiceBlock = ({placeDetail}) => {
    return (
        <div>
        <div className='cardbox-firstrow'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <AiOutlineClockCircle  size={14} color="#0d9bb8" />
                    <div style={{marginLeft: '15px'}}>
                        <p className='appoint-date' >1:00 pm, Sunday, December 29th, 2019</p>
                    </div>
                </div>      
            </div>

            <div className='location-div'>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <GoLocation size={14} color="#0d9bb8" />
                        <p style={{marginLeft: 15}} className='appoint-date' >{placeDetail}</p>
                    </div>
            </div> 
            </div>
    );
}

export default ServiceBlock;
