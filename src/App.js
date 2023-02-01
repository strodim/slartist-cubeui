import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/header/Header';
import Layer from './layout/Layer';
import { useWindowDimensions } from './hooks/useWindowDimensions';
import DeviceContext from './context/DeviceContext';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import Default from './pages/default/Default';
import About from './pages/about/About';
import Exhibitions from './pages/exhibitions/Exhibitions';
import Contacts from './pages/contacts/Contacts';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://graphql.datocms.com/',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer e0069e739efc37646fb4185a490ba4`,
    },
  }),
});
function App() {

  const screenWidth = useWindowDimensions().width;

  let device = 'big';

  if (screenWidth < 900) {
    device = 'medium';
  }

  if (screenWidth < 768) {
    device = 'small';
  }

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <DeviceContext.Provider value={{ device }}>
          <Layer>
            <Header />
            <Routes>
              <Route path="/" element={<Default />} />
              <Route path="/about" element={<About />} />
              <Route path="/exhibitions" element={<Exhibitions />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </Layer>
        </DeviceContext.Provider >
      </ApolloProvider>
    </BrowserRouter >
  );
}

export default App;
