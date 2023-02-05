import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import Banner from './component/Banner';
import Create from './component/Create';
import Calendar from './component/Calendar';
import CarouselMid from './component/CarouselMid';
import Banner1 from './component/Banner1';
import Mixbooker from './component/Mixbooker';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Banner />
      <Create />
      <Calendar />
      <CarouselMid />
      <Banner1  />
      <Mixbooker />
      <Footer />
    </div>
  );
}

export default App;
