import { motion } from 'motion/react';
import { useState } from 'react';

export default function Header() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 2
      }}
      className="flex items-center justify-between py-2 px-6 shadow-md uppercase relative"
    >
      <nav className="hidden lg:flex gap-4">
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
        <h1 className="text-2xl lg:text-4xl font-bold">
          <a href="">La Princesse</a>
        </h1>
      </div>

      <nav className="hidden lg:flex gap-4">
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
      <button
        onClick={() => setOpenMobileNav(!openMobileNav)}
        className="flex lg:hidden w-6 h-4 cursor-pointer justify-between flex-col"
      >
        <div className="w-full h-px bg-black"></div>
        <div className="w-full h-px bg-black"></div>
        <div className="w-full h-px bg-black"></div>
      </button>

      <div
        className={`absolute ${
          openMobileNav ? 'w-full left-0' : 'w-0 -left-96'
        } bg-white p-8 top-10 transition-all duration-300 shadow-md`}
      >
        <nav className="flex flex-col gap-4">
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
      </div>
    </motion.header>
  );
}
