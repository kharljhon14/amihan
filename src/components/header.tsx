export default function Header() {
  return (
    <header className="flex items-center justify-between py-2 px-6 shadow-2xl uppercase">
      <nav className="flex gap-4">
        <a
          className="hover:underline"
          href=""
        >
          Shop
        </a>
        <a
          className="hover:underline"
          href=""
        >
          Book Experience
        </a>
        <a
          className="hover:underline"
          href=""
        >
          Engagement
        </a>
        <a
          className="hover:underline"
          href=""
        >
          Our World
        </a>
      </nav>
      <div>
        <h1 className="text-4xl font-bold">
          <a href="">Amihan</a>
        </h1>
      </div>
      <nav className="flex gap-4">
        <a
          className="hover:underline"
          href=""
        >
          Search
        </a>
        <a
          className="hover:underline"
          href=""
        >
          Wishlist
        </a>
        <a
          className="hover:underline"
          href=""
        >
          Account
        </a>
        <a
          className="hover:underline"
          href=""
        >
          Bag
        </a>
      </nav>
    </header>
  );
}
