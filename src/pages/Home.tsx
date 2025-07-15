import Header from '../components/Header';
import Main from '../components/Main';
import Introduce from '../components/Introduce';
import Service from '../components/Service';
import Product from '../components/Product';
import Advise from '../components/Advise';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Main />
        <Introduce />
        <Service />
        <Product />
        <Advise />
        <Footer />
      </div>
    </>
  );
};

export default Home;
