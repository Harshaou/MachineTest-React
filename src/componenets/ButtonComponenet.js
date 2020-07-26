import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'



const ButtonComponenet = ({btnMode,buttonText1,buttonText2,route, type, name}) => {

    const data = useSelector(state => state)

    const dispatch = useDispatch()
    return (
        <div className='button-row'>
        <Button variant={btnMode}>{buttonText1}</Button>
        <Link onClick={ () => dispatch({type: type, payload: name})} className='link-' to={route}><Button  className='marginRL' variant="info">{buttonText2}</Button></Link>
        <Button onClick={() => console.log(data)} variant="info">More</Button>
        </div> 
    );
}

export default ButtonComponenet;
