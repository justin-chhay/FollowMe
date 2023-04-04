import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreatePlace from './components/CreatePlace';
import ShowPlaceList from './components/ShowPlaceList';
import ShowPlaceDetails from './components/ShowPlaceDetails';
import UpdatePlaceInfo from './components/UpdatePlaceInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowPlaceList />} />
          <Route path='/create-place' element={<CreatePlace />} />
          <Route path='/edit-place/:id' element={<UpdatePlaceInfo />} />
          <Route path='/show-place/:id' element={<ShowPlaceDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;