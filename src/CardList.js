import React from 'react';
import Card from './Card';

const CardList = ({evatars}) =>{
    return(
        <div>
            {
                evatars.map((evatar, i) => {
                    return (<Card 
                    key={i} 
                    id={evatars[i].id} 
                    evatarname={evatars[i].evatarname} 
                    description={evatars[i].description}
                    />
                    );
            })
        }
        </div>
    );
}

export default CardList;