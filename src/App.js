import './App.css';
import ArtList from './components/art/ArtList';
import Cover from './components/cover/Cover';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Background from './layout/Background';
import Layer from './layout/Layer';


function App() {
  return (
    <Background>
      <Layer>
        <Header />
        <Cover />
        <ArtList />
        <Footer />
      </Layer>
    </Background>
  );
}

export default App;
