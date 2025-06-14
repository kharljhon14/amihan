import ProductCard from './product-card';

export default function Products() {
  return (
    <div>
      <div className="flex items-center justify-center gap-8 mb-12">
        <button className="uppercase cursor-pointer text-gray-500 hover:text-black transition-colors duration-300">
          Icons
        </button>
        <button className="uppercase cursor-pointer text-gray-500 hover:text-black transition-colors duration-300">
          Aurelia
        </button>
        <button className="uppercase cursor-pointer text-gray-500 hover:text-black transition-colors duration-300">
          Personalised
        </button>
      </div>
      <div className="flex justify-center gap-4">
        <ProductCard
          image="/images/image4.jpg"
          title="Whispers of Dawn"
          price="2,450"
        />
        <ProductCard
          image="/images/image2.jpg"
          title="Velvet Horizon"
          price="1,800"
        />
        <ProductCard
          image="/images/image3.jpg"
          title="Quiet Ember"
          price="2,150"
        />
        <ProductCard
          image="/images/image1.jpg"
          title="Golden Reverie"
          price="2,000"
        />
      </div>
    </div>
  );
}
