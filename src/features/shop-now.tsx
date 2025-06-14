import FeatureCard from './feature-card';

export default function ShopNow() {
  return (
    <div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="uppercase underline text-xl"
          href=""
        >
          Shop Now
        </a>
      </div>
      <div className="flex flex-wrap gap-4">
        <FeatureCard
          title="Modern Heirloom"
          header="Crafted for the Ones Who Know Subtlety Is the Loudest Form of Power"
          image="/images/image11.jpg"
        />
        <FeatureCard
          title="Silent Allure"
          header="Not Just Made to Be Worn, but to Be Remembered in Every Glance"
          image="/images/image8.jpg"
        />
        <FeatureCard
          title="Crafted Serenity"
          header="Where Every Curve, Shade, and Line Whispers a Story of Sophistication"
          image="/images/image6.jpg"
        />
        <FeatureCard
          title="Ethereal Bloom"
          header="Because You Were Never Meant to Blend In Only to Shine in Your Own Way"
          image="/images/image9.jpg"
        />
      </div>
    </div>
  );
}
