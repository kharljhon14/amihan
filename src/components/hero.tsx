import Button from './button';

export default function Hero() {
  return (
    <div className="bg-[url(/images/hero.jpg)] bg-gray-200 bg-blend-multiply h-[90vh] bg-center bg-cover">
      <div className="w-full h-full overflow-hidden relative uppercase flex items-center justify-center flex-col gap-10">
        <h2 className=" select-none text-white  text-9xl font-light">Amihan</h2>
        <Button>Discover Our Icons</Button>
        <a
          href="#"
          className="bg-gray-800 -right-5 font-light bottom-28 absolute text-white text-lg -rotate-90 px-2 uppercase"
        >
          chat
        </a>
      </div>
    </div>
  );
}
