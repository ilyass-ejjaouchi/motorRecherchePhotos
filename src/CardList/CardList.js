import React from 'react';
import Card from '../card/Card' ;
import { Spinner,Pane } from 'evergreen-ui';

const CardList = ({ photos }) => {
    if (photos) {
        return (
                <div>
                    {
                    photos.map((photo, i) => {
                        return (
                            <Card 
                            key={i} 
                            tags={photo.tags} 
                            previewURL={photo.previewURL}
                            imageURL={photo.previewURL}
                            likes={photo.likes}
                            comments={photo.comments}
                            />
                        );
                    })
                    }
                </div>
            );        
    }else{
        return (
        <b></b>
        )
    }
 
}
export default CardList;
