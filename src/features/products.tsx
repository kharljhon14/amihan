import Card from './product-card';

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
        <Card
          image="/images/image4.jpg"
          title="Whispers of Dawn"
          subtitle="&#8369;2,450"
        />
        <Card
          image="/images/image2.jpg"
          title="Velvet Horizon"
          subtitle="&#8369;1,800"
        />
        <Card
          image="/images/image3.jpg"
          title="Quiet Ember"
          subtitle="&#8369;2,150"
        />
        <Card
          image="/images/image1.jpg"
          title="Golden Reverie"
          subtitle="&#8369;2,000"
        />
      </div>
    </div>
  );
}
