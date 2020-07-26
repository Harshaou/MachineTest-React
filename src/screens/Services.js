import React from 'react';
import {useSelector} from 'react-redux'
import CarouselBox from '../componenets/CarouselBox';
import CardBox from '../componenets/CardBox';
import MidTitle from '../componenets/MidTitle';
import ButtonComponenet from '../componenets/ButtonComponenet';
import ServiceBlock from '../componenets/ServiceBlock';
import NoMore from '../componenets/NoMore';


const Services = () => {
    let data = useSelector(state => state)
    let upcomingService = data.filter(item => item.status === 'ACTIVE')

    return (
        <div>
            <CarouselBox />
            {upcomingService.map(item => {
                return (
                <CardBox 
                key={item.key}
                name={item.name} 
                place={item.place}
                profilePic={item.profilePic}
                title='Upcoming services'
                progress={50}>
                <MidTitle title='Check in here or scan customer QR code to check in when the service is about to start' />
                <ServiceBlock
                placeDetail={item.detailPlace} />
                <ButtonComponenet
                name={item.name} 
                type='SERVICES'
                route='/payments'
                buttonText1='Check In'
                buttonText2='Generate invoice'
                btnMode='info' />
                </CardBox>
                )
            })}
            <NoMore />
        </div>
    );
}

export default Services;
