export default function Footer() {
  return (
    <footer className="px-4 pt-12 pb-8">
      <div className="flex justify-between uppercase text-sm">
        <nav className="flex flex-col gap-2 text-gray-600">
          <a href="">Contact Us</a>
          <a href="">Shipping</a>
          <a href="">Returns & Repairs</a>
          <a href="">FAQS</a>
          <a href="">Warranty Policy</a>
          <a href="">Terms & Conditions</a>
          <a href="">Privary Policy</a>
          <a href="">Cookies Policy</a>
        </nav>
        <nav className="flex flex-col gap-2 text-gray-600">
          <a href="">Brand Profile</a>
          <a href="">Stores</a>
          <a href="">Philanthropy</a>
          <a href="">Careers</a>
          <a href="">Care Guide</a>
          <a href="">Recycling</a>
        </nav>
        <div className="flex flex-col gap-2 text-gray-600">
          <a href="">Instagram</a>
          <a href="">Facebook</a>
          <a href="">Twitter</a>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-md">Join the list</p>
          <p className="text-xs max-w-xs capitalize">
            Recieve updates on new arrivals, exclusive events, store openings, news and more.
          </p>
          <input
            className="border-b border-gray-400 outline-0"
            type="text"
            placeholder="Email address"
          />
        </div>
      </div>
      <div className="flex justify-between uppercase text-sm text-gray-500 mt-10">
        <p className="font-semibold">Karlikha</p>
        <p className="">Crafted with 💙 in the Philippines.</p>
        <p className="">© 2025 Amihan. All rights reserved.</p>
      </div>
    </footer>
  );
}
