interface Props {
  image: string;
  title: string;
}

export default function FeatureCard({ image, title }: Props) {
  return (
    <div className="relative  h-[46rem] w-full ">
      <div className="h-full absolute inset-0 -z-10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div className="bg-black/50 absolute inset-0"></div>
      </div>
      <div className="flex justify-end items-end text-end h-full p-4">
        <h3 className="text-white text-6xl uppercase max-w-3xl">{title}</h3>
      </div>
    </div>
  );
}
