import React from 'react';
import { GoLocation } from 'react-icons/go';
import { AiOutlineClockCircle } from 'react-icons/ai';


const RequestBlock = () => {
    return (
        <div>
            <div className='cardbox-firstrow'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <AiOutlineClockCircle style={{marginBottom: '20px'}}  size={14} color="#0d9bb8" />
                    <div style={{marginLeft: '15px'}}>
                        <p className='appoint-date' >Sunday, December 22nd, 2019</p>
                        <p className='appoint-date' >Sunday, December 29th, 2019</p>
                    </div>
                </div>

                <div className='deal-col'>
                    <div style={{marginLeft: '15px'}}>
                        <p className='appoint-date' >9:00 am - 2:00 pm</p>
                        <p className='appoint-date' >9:00 am - 2:00 pm</p>
                    </div>
                </div>      
            </div>
            <div className='location-div'>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <GoLocation size={14} color="#0d9bb8" />
                        <p style={{marginLeft: 15}} className='appoint-date' >50 Haiwara Tea Garden Dr, San Francisco, CA 94118</p>
                    </div>
                </div> 
        </div>
    );
}

export default RequestBlock;
