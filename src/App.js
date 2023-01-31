import './App.css';
import ArtList from './components/art/ArtList';
import Cover from './components/cover/Cover';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Background from './layout/Background';
import Layer from './layout/Layer';
import { useWindowDimensions } from './hooks/useWindowDimensions';
import DeviceContext from './context/DeviceContext';

function App() {

  const screenWidth = useWindowDimensions().width;

  let device = 'big';

  if (screenWidth < 900) {
    device = 'medium';
  }

  if (screenWidth < 600) {
    device = 'small';
  }

  return (
    <DeviceContext.Provider value={{ device }}>
      <Background>
        <Layer>
          <Header />
          <Cover />
          <ArtList />
          <Footer />
        </Layer>
      </Background>
    </DeviceContext.Provider >
  );
}

export default App;
