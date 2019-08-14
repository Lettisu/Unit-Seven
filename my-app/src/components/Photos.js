import React from 'react';
import Gallery from './Gallery';
const Photos = props => {
    let image = props.data.map((image) => (
       
        < Gallery
            url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
            key={image.id}
            
        />
    ));
    return (
        < div className="photo-container" >
 
            <h2>{props.data.length === 0 && props.match ? 'No matches found' : props.results} </h2>
            <ul> {image}</ul>
        </div>
    );
};
    
export default Photos;
