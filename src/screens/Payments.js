import React from 'react';
import CarouselBox from '../componenets/CarouselBox';
import CardBox from '../componenets/CardBox';
import MidTitle from '../componenets/MidTitle';
import ButtonComponenet from '../componenets/ButtonComponenet';
import PaymentBlock from '../componenets/PaymentBlock';
import NoMore from '../componenets/NoMore';


const Payments = () => {
    return (
        <div>
            <CarouselBox />
            <CardBox title='Pending Payment' progress={90}>
            <MidTitle title='Service is complete, please confirm payment amount' />
            <PaymentBlock />
            <ButtonComponenet  
            type='PAYMENT'
            route='/payments'
            buttonText1='Start a Chat'
            buttonText2='Resend Invoice'
            btnMode='outline-info' />
            </CardBox>
            <NoMore />
        </div>
    );
}

export default Payments;
