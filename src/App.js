import './index.css';
import Home from './components/Home'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

<Navbar />

<Home />

<Footer />

    </div>
  );
}

export default App;
