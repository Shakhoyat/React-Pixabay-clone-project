import React from 'react'
import PixabayContext from '../context/PixabayContext'
import { useContext } from 'react';
const NavBar = () => {
    const { fetchImagesbyCategory } = React.useContext(PixabayContext);
    const handleCategoryClick = (category) => {
        fetchImagesbyCategory(category);
    };
    return (
        <>
            <div className='container text-center my-3'>
                <button onClick={() => handleCategoryClick("nature")} type="button" className="btn btn-primary mx-3">Nature</button>
                <button onClick={() => handleCategoryClick("science")} type="button" className="btn btn-secondary mx-3">Science</button>
                <button onClick={() => handleCategoryClick("computer")} type="button" className="btn btn-success mx-3">Computer</button>
                <button onClick={() => handleCategoryClick("buildings")} type="button" className="btn btn-danger mx-3">Buildings</button>
                <button onClick={() => handleCategoryClick("sports")} type="button" className="btn btn-warning mx-3">Sports</button>
                <button onClick={() => handleCategoryClick("food")} type="button" className="btn btn-info mx-3">Food</button>
                <button onClick={() => handleCategoryClick("travel")} type="button" className="btn btn-light mx-3">Travel</button>
                <button onClick={() => handleCategoryClick("business")} type="button" className="btn btn-secondary mx-3">Business</button>
                <button onClick={() => handleCategoryClick("health")} type="button" className="btn btn-danger mx-3">Health</button>
            </div>
            <div className="container d-flex justify-content-center my-4">
                <form className="w-50">
                    <div className="input-group input-group-md">
                        <input
                            type="text"
                            className="form-control bg-dark text-light rounded-start"
                            placeholder="Search images..."
                            aria-label="Search images"
                        />
                        <button className="btn btn-primary rounded-end" type="submit">
                            <i className="bi bi-search"></i> Search
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NavBar