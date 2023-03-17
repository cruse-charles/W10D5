import harvardArt from './data/harvardArt'
import GalleryNavigation from './components/GalleryNavigation';
import GalleryIndexName from './components/GalleryNavigation/GalleryIndexName';
import GalleryView from './components/GalleryView';
import { Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='page-wrapper'>
          <GalleryNavigation />
          <Route path='/galleries/:galleryId' component={GalleryView}></Route>
        </div>
      </header>
    </div>
  );
}

export default App;
