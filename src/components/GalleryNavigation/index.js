import React from 'react';
import harvardArt from '../../data/harvardArt'
import { NavLink } from 'react-router-dom';

const GalleryNavigation = (props) => {

    const galleries = Object.values(harvardArt.records)
    console.log(galleries)

    const galleriesList = galleries.map((gallery) => {
        return 
    })


    return (
        <nav>
        <NavLink to="/">Home</NavLink>
               
        <h1>Galleries</h1>
        </nav>
    )


}

export default GalleryNavigation