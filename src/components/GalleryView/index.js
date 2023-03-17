import React from "react";
import harvardArt from "../../data/harvardArt";
import { useParams } from "react-router-dom";

const GalleryView = (props) => {
    const {galleryId} = useParams();
    // const gallery = harvardArt[galleryId]
    const gallery = harvardArt.find(e => e === galleryId)

    return (
        <div>
            <li>Gallery Name: {galleryId.name}</li>
            {/* <li>Gallery Id: {galleryId}</li> */}
        </div>
    )
}

export default GalleryView;