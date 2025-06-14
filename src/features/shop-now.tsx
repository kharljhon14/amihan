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
      <div className="flex gap-4">
        <FeatureCard
          title="Crafted for Moments That Deserve to Shine"
          image="/images/image7.jpg"
        />
        <FeatureCard
          title="For the Princess Who Writes Her Own Story"
          image="/images/image8.jpg"
        />
      </div>
    </div>
  );
}
