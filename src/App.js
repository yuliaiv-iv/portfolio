import GlobalStyle from "./components/GlobalStyle";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import { Switch, Route, useLocation } from 'react-router-dom'
import Movie from "./pages/Movie";
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer'

function App() {

  const location = useLocation();

  console.log(location.pathname)
  return (
    <div className='App'>
      <GlobalStyle />
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <AboutUs />
          </Route>
          <Route exact path='/work'>
            <OurWork />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/work/:id'>
            <Movie />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
