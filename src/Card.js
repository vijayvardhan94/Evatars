import React from 'react';

const Card = ({evatarname, description, id  }) =>{ //replace props with the destructured properties
    //const {evatarname, description} = props //es6 destructuring
    return (
        <div className = 'tc bg-silver dib br3 pa3 ma2 grow bw2 shadow5'>
            <img alt = 'evatars' src = {`http://evatar.io/${id}`}/>
            <div>
                <h2>{evatarname}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;