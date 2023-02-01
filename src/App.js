import './App.css';
import ArtList from './components/art/ArtList';
import Cover from './components/cover/Cover';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Background from './layout/Background';
import Layer from './layout/Layer';
import { useWindowDimensions } from './hooks/useWindowDimensions';
import DeviceContext from './context/DeviceContext';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';

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
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
