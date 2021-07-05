import AboutUS from "./pages/AboutUS";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AboutUS />
    </div>
  );
}

export default App;
