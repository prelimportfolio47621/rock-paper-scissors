import React, { useEffect } from 'react';

function Choice({id, src, alt, clickChoice}) {

    const handleClick = () => {
        clickChoice(id);
        console.log('clicked');
    }
    return (
        <div id={id} class="choice" onClick={handleClick}>
            <img src={src} alt={alt} />
        </div>
    );
}

export default Choice;