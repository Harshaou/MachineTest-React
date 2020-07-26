import React from 'react';
import {useSelector} from 'react-redux'
import CarouselBox from '../componenets/CarouselBox';
import CardBox from '../componenets/CardBox';
import MidTitle from '../componenets/MidTitle';
import RequestBlock from '../componenets/RequestBlock';
import ButtonComponenet from '../componenets/ButtonComponenet';
import NoMore from '../componenets/NoMore';

const Request = () => {
    let data = useSelector(state => state)
    let pendingRequest = data.filter(item => item.status === 'pending')

    return (
        <div>
            <CarouselBox />
            {pendingRequest.map(item => {
                return (
                    <CardBox key={item.name}
                    name={item.name} 
                    place={item.place}
                    profilePic={item.profilePic}
                    title='Pending Request' 
                    progress={1}>
                    <MidTitle 
                    title='This customer is availible at :' />
                    <RequestBlock 
                    placeDetail={item.detailPlace} />
                    <ButtonComponenet
                    data={data}
                    name={item.name}
                    type='ACTIVE'
                    route='/services'
                    buttonText1='Reshedule'
                    buttonText2='Accept Request'
                    btnMode='outline-info' />
                    </CardBox>
                )
            })}
            <NoMore />
        </div>
    );
}

export default Request;
