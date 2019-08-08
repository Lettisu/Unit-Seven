import React from 'react';
import Photos from './Photos';
import NotFound from './NotFound'
const Gallery = (props) => {
    const results = props.data
    let photos;
    if (results.length > 0) {
        photos = photos.filter(img => img.hasOwnProperty("url_o"));
    } else {
        photos = <NotFound />
    }
}
return (
    <div class="photo-container">
        <h1>{props.title}</h1>
        <ul>
            {photos}
        </ul>
    </div>
)
export default Gallery;