import React from 'react'
import { NavLink } from 'react-router-dom'

function GalleryIndexName(props) {
    return (
        <li>
            <NavLink
                to={`/galleries/${props.gallery.id}`}
                className='gallery-name'
                gallery={props}
                >{props.gallery.name}
            </NavLink>
        </li>
    )
}

export default GalleryIndexName