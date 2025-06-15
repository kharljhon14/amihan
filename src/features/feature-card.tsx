import Button from '../components/button';

interface Props {
  image: string;
  title: string;
  header: string;
}

export default function FeatureCard({ image, title, header }: Props) {
  return (
    <div className="relative h-[46rem] lg:flex-1/3 flex-1/2 ">
      <div className="h-full absolute inset-0 -z-10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div className="bg-black/50 absolute inset-0"></div>
      </div>
      <div className="flex flex-col text-white justify-between items-center text-center h-full uppercase p-4">
        <p className="text-xl max-w-md">{header}</p>
        <p className="text-4xl">{title}</p>
        <Button>Shop Now</Button>
      </div>
    </div>
  );
}
