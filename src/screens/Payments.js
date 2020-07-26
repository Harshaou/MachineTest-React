import React from 'react';
import {useSelector} from 'react-redux'
import CarouselBox from '../componenets/CarouselBox';
import CardBox from '../componenets/CardBox';
import MidTitle from '../componenets/MidTitle';
import ButtonComponenet from '../componenets/ButtonComponenet';
import PaymentBlock from '../componenets/PaymentBlock';
import NoMore from '../componenets/NoMore';


const Payments = () => {
    let data = useSelector(state => state)
    let pendingPayment = data.filter(item => item.status === 'PAYMENT')

    return (
        <div>
            <CarouselBox />
            {pendingPayment.map(item => {
                return (
                <CardBox 
                key={item.key} 
                title='Pending Payment'
                name={item.name} 
                place={item.place}
                profilePic={item.profilePic}
                progress={90}>
                <MidTitle title='Service is complete, please confirm payment amount' />
                <PaymentBlock 
                placeDetail={item.detailPlace}/>
                <ButtonComponenet
                name={item.name} 
                type='PAYMENT'
                route='/payments'
                buttonText1='Start a Chat'
                buttonText2='Resend Invoice'
                btnMode='outline-info' />
                </CardBox>
                )
            })}
            <NoMore />
        </div>
    );
}

export default Payments;
