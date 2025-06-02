import React from 'react'
import PixabayContext from '../context/PixabayContext'
import { useState } from 'react'
const Imgs = () => {
    const { imgData } = React.useContext(PixabayContext);
    return (
        <div>
            {imgData.map((img) => (
                <div key={img.id} className="img-container">
                    <img src={img.webformatURL} alt={img.tags} />
                    <p>{img.tags}</p>
                </div>
            ))}
        </div>
    )
}

export default Imgs