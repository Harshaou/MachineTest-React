import React from 'react';
import CarouselBox from '../componenets/CarouselBox';
import CardBox from '../componenets/CardBox';
import MidTitle from '../componenets/MidTitle';
import RequestBlock from '../componenets/RequestBlock';
import ButtonComponenet from '../componenets/ButtonComponenet';
import NoMore from '../componenets/NoMore';

const Request = () => {
    return (
        <div>
            <CarouselBox />
            <CardBox title='Pending Request' progress={1}>
            <MidTitle title='This customer is availible at :' />
            <RequestBlock />
            <ButtonComponenet  
            type='ACTIVE'
            route='/services'
            buttonText1='Reshedule'
            buttonText2='Accept Request'
            btnMode='outline-info' />
            </CardBox>
            <NoMore />
        </div>
    );
}

export default Request;
