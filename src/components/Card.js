import React from 'react';
//import 'tachyons';
//we need react to run jsx

const Card = ({id, name, email }) => {
    return (
        //destructuring by placing doc in const
       //component must only return 1 element apparently
        <div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{ name}</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;