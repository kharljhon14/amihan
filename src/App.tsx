import Header from './components/header';
import Hero from './features/hero';
import Journals from './features/journals';
import LearnMore from './features/learn-more';
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
          <Journals />
        </div>
        <LearnMore />
      </main>
    </>
  );
}

export default App;
