import React from 'react';

const Gallery = (props) => {
     return (
        <li>
         <img src={props.url} alt="" /> 
     </li>
    );
};

export default Gallery;
