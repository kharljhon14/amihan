interface Props {
  image: string;
  title: string;
  price: string;
}

export default function ProductCard({ image, title, price }: Props) {
  return (
    <div className=" w-full cursor-pointer">
      <a href="#">
        <div className="overflow-hidden h-[32rem]">
          <img
            className="w-full h-full object-cover object-center hover:scale-110 hover:rotate-1 transition-transform duration-500"
            src={image}
            alt={title}
          />
        </div>
        <div className="mt-2 px-2">
          <p className="text-xl">{title}</p>
          <p className="text-gray-700 text-xl">&#x20B1;{price}</p>
        </div>
      </a>
    </div>
  );
}
