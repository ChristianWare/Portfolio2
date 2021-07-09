import AboutUS from "./pages/AboutUS";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
// Animation Import:
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";


function App() {
  const location = useLocation();
  console.log(location)
  return (
    <>
      <GlobalStyle />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutUS />
          </Route>
          <Route path='/work' exact>
            <OurWork />
          </Route>
          <Route path='/work/:id'>
            <MovieDetail />
          </Route>
          <Route path='/contact'>
            <ContactUs />
          </Route>
        </Switch>
        <ScrollTop />
      </AnimatePresence>
    </>
  );
}

export default App;
