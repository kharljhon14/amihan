import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 2
      }}
      className="flex items-center justify-between py-2 px-6 shadow-2xl uppercase"
    >
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
          <a href="">La Princesse</a>
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
    </motion.header>
  );
}
