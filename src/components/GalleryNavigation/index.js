import React from 'react';
import harvardArt from '../../data/harvardArt'
import { NavLink } from 'react-router-dom';
import GalleryIndexName from './GalleryIndexName';

const GalleryNavigation = (props) => {

    const galleries = Object.values(harvardArt.records)
    console.log(galleries)

    const galleriesList = galleries.map((gallery) => {
        return <GalleryIndexName key={gallery.id} gallery={gallery} />
    })

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <h1>Galleries</h1>
            {galleriesList}
        </nav>
    )

}

export default GalleryNavigation