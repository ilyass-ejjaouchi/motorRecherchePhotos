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
                        <div className="fl w-100 w-25-ns pa2">
                            <Card 
                            key={i} 
                            tags={photo.tags} 
                            previewURL={photo.previewURL}
                            imageURL={photo.previewURL}
                            likes={photo.likes}
                            comments={photo.comments}
                            />
                        </div>
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
