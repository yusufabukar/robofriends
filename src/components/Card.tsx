import React from 'react';

interface CardStatelessProps {
    id:string,
    name:string,
    email:string
}

const Card:React.SFC<CardStatelessProps> = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='Robots' />
            <div>
                <h2>{name}</h2>
                    <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;