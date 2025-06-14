import Header from './components/header';
import Hero from './features/hero';
import Products from './features/products';

function App() {
  return (
    <>
      <Header />
      <main className="space-y-12">
        <Hero />
        <div className="mx-4">
          <Products />
        </div>
      </main>
    </>
  );
}

export default App;
