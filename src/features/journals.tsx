import Card from './product-card';

export default function Journals() {
  return (
    <div>
      <div className="flex items-center justify-between uppercase gap-8 mb-12 mx-4">
        <h2 className="text-5xl">Journal</h2>
        <a
          className="underline"
          href="#"
        >
          Read the Journal
        </a>
      </div>
      <div className="flex justify-center gap-4">
        <Card
          image="/images/image12.jpg"
          title="Whispers of Gold"
          subtitle="Stories woven from elegance, artistry, and the quiet strength behind every design."
        />
        <Card
          image="/images/image10.jpg"
          title="The Princess Pages"
          subtitle="A curated space of reflections, musings, and the timeless essence of modern royalty."
        />
        <Card
          image="/images/image7.jpg"
          title="Velvet Notions"
          subtitle="Where inspiration meets intention — a journal of style, substance, and quiet beauty."
        />
        <Card
          image="/images/image5.jpg"
          title="Of Light and Craft"
          subtitle="Exploring the stories behind every shimmer, silhouette, and thoughtful creation."
        />
      </div>
    </div>
  );
}
