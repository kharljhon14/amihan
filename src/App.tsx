import Header from './components/header';
import Hero from './features/hero';
import Products from './features/products';
import ShopNow from './features/shop-now';

function App() {
  return (
    <>
      <Header />
      <main className="space-y-12">
        <Hero />
        <div className="mx-4 space-y-12">
          <Products />
          <ShopNow />
        </div>
      </main>
    </>
  );
}

export default App;
