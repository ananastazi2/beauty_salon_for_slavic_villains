import { Routes, Route, Link } from "react-router-dom";
import '../src/fonts/Galaktika.ttf';
import './App.css';
import Home from './pages/home/Home';
import Services from './pages/services/all/Services'
import WitchingHairRituals from './pages/services/witchingHairRituals/WitchingHairRituals'
import Team from './pages/team/Team'
import Contacts from './pages/contacts/Contacts'
import Header from './components/Header';
import Footer from './components/Footer';
import { routes } from "./consts/RouteConsts";
import PageNotFound from "./pages/notFound/PageNotFound";

function App() {
  return (
    <div className='app-container'>
      <Header />
        <Routes>
          <Route path={routes.home} 
              element={
                <>
                  <div id='background-img'></div>
                  <Home />
                </>
              } 
          /> {/* define the standard route */}
          <Route path={routes.services.base}>
            <Route index element={<Services />} />
            <Route path={routes.services.all} element={<Services />} />
            <Route path={routes.services.witchingHairRituals} element={<WitchingHairRituals />} />
          </Route> {/* define the services route */}
          <Route path={routes.team} element={<Team />} /> {/* define the team route */}
          <Route path={routes.contacts} element={<Contacts />} /> {/* define the contacts route */}

          <Route path="*" element={<PageNotFound />} /> {/* define every other possible route */}
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
