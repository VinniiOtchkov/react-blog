import React from 'react'
import { Card } from 'react-materialize';

const NoMatch = () => {
    return (
        <div>

            <Card style={{marginTop:'100px'}} className='large'>
            <img style={{width:'500px'}} className="errorImage" alt="" src={window.location.origin + '/error_image.jpg'} />

                <p>Sorry! Looks like this is a bad route. Try again!</p>
            </Card>
        </div>
    )
}


export default NoMatch;