import React, { useContext } from 'react'
import PixabayContext from './PixabayContext'
import { useState } from 'react'
const Images = () => {
    const { imgData } = useContext(PixabayContext);
    return (
        <div>
            {imgData.map((image) => (
                <div key={image.id} className="image-container">
                    <img src={image.webformatURL} alt={image.tags} />
                    <p>{image.tags}</p>
                </div>
            ))}
        </div>
    )
}

export default Images