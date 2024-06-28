import React from 'react';
import Navigation from './components/navigationbar/navbar';
import Home from './components/Home/Home';
import TopArrow from './components/TopView/Arrow';
import NationalTour from './components/Home/pages/nationTour';
import ToNationalPark from './components/Home/pages/tonationalpark';
import Explore1 from './components/explore/explore1';
import Explore2 from './components/explore/explore2';
import Explore3 from './components/explore/explore3';
import Explore5 from './components/explore/explore5';
import WildExplore1 from './components/wildtour/wildexplore1';
import WildExplore2 from './components/wildtour/wildexplore2';
class App extends React.Component {
  render() {
     (
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tour" element={<NationalTour />} />
            <Route path="/national" element={<ToNationalPark />} />
            <Route path="/explore1" element={<Explore1 />} />
            <Route path="/explore2" element={<Explore2 />} />
            <Route path="/explore3" element={<Explore3 />} />
            <Route path="/explore4" element={<Explore4 />} />
            <Route path="/explore5" element={<Explore5 />} />
            <Route path="/wildexplore1" element={<WildExplore1 />} />
            <Route path="/wildexplore2" element={<WildExplore2 />} />
            <Route path="/wildexplore3" element={<WildExplore3 />} />
            <Route path="/wildexplore4" element={<WildExplore4 />} />
            <Route path="/wildexplore5" element={<WildExplore5 />} />
            <Route path="/nationtour" element={<Home />} />
            <Route path="/tonationalpark" element={<Home />} />
          </Routes>
      
        
        </div>
      </Router>
    );
  }
}

export default App;
