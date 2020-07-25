import React from 'react';
import CarouselBox from '../componenets/CarouselBox';
import CardBox from '../componenets/CardBox';
import MidTitle from '../componenets/MidTitle';
import ButtonComponenet from '../componenets/ButtonComponenet';
import ServiceBlock from '../componenets/ServiceBlock';
import NoMore from '../componenets/NoMore';


const Services = () => {
    return (
        <div>
            <CarouselBox />
            <CardBox title='Upcoming services'  progress={50}>
            <MidTitle title='Check in here or scan customer QR code to check in when the service is about to start' />
            <ServiceBlock />
            <ButtonComponenet  
            type='SERVICES'
            route='/payments'
            buttonText1='Check In'
            buttonText2='Generate invoice'
            btnMode='info' />
            </CardBox>
            <NoMore />
        </div>
    );
}

export default Services;
