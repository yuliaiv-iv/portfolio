import GlobalStyle from "./components/GlobalStyle";
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Switch, Route, useLocation } from 'react-router-dom'
import Project from "./pages/Project";
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <AboutMe />
          </Route>
          <Route exact path='/work'>
            <Projects />
          </Route>
          <Route path='/contacts'>
            <Contact />
          </Route>
          <Route path='/work/:id'>
            <Project />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
