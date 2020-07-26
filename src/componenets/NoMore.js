import React,{ useState}  from 'react';
import { Button } from 'react-bootstrap';

const NoMore = ({content, value}) => {
    const [show, setShow] = useState(value)
    return (
            <div className='nomore'>
            {show ? <Button onClick={() => setShow(false)} variant="info" >
                Show more</Button> : <h3 style={{color: '#0997b5'}}>{content}</h3> }
        </div>
    );
}

export default NoMore;
