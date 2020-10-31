import React from 'react';
import './Card.css'
const Card = ({tags,previewURL,imageURL,likes,comments}) => {
  return ( 
    <div class="ui card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 style">
        <div class="content">
            <img class="ui avatar image" alt="image1" src={previewURL}/> {tags}
        </div>
        <div class="image">
            <img alt="image2" src={imageURL}/>
        </div>
        <div class="content">
            <span class="right floated">
            <i class="heart outline like icon"></i>
            {likes} likes
            </span>
            <i class="comment icon"></i>
            {comments} comments
        </div>
    </div>
  );
}

export default Card;
