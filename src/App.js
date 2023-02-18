import './App.css';
import Questions from './components/Questions';
import Result from './components/Result';
function App() {

  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
  <a className="navbar-brand mx-2" href="#">Quizzos</a>
  </nav>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
    <Questions  />
    
    </>
  );
}

export default App;
