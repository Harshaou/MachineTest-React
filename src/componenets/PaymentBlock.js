import React from 'react';
import { RiBillLine } from 'react-icons/ri';


const PaymentBlock = () => {
    return (
        <div>
            <div className='cardbox-firstrow'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <RiBillLine style={{marginBottom: '35px'}}  size={18} color="#0d9bb8" />
                <div style={{marginLeft: 15}}>
                <p className='appoint-date' >Invoice item:</p>
                <p>Session Price</p>
                </div>
                </div>

                <div className='deal-col'>
                    <div style={{marginLeft: '15px'}}>
                        <h5 className='goldenrod'>$80</h5>                        
                    </div>
                </div>      
            </div>
        </div>
    );
}

export default PaymentBlock;
