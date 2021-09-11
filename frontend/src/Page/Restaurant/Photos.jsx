import React, {useState} from 'react';
import ImageViewer from 'react-simple-image-viewer';

//component
import PhotoCollection from '../../Components/restaurant/PhotosCollection';

const Photos = () => {
    const [photos, setPhotos] = useState (["https://b.zmtcdn.com/data/pictures/7/18551057/5a9db15e609c363895358e46ad1ad10f.jpg",
                                           "https://b.zmtcdn.com/data/pictures/7/18551057/a2616929f20c9248fcfe96613cab9509.jpg",
                                          "https://b.zmtcdn.com/data/pictures/7/18551057/e95118c3e3d558f5b8e8140a69c77e58.jpg"]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <> 
      {isMenuOpen && (
        <ImageViewer
          src={ photos }
          currentIndex={ CurrentImg }
          disableScroll={ false }
          onClose={ closeViewer }
        />
      )}
          <div className="flex flex-wrap gap-2">
            {photos.map((photo) => <PhotoCollection 
            image={photo}
            openViewer={openViewer} />)}
            </div>  
        </>
    )
}

export default Photos;
