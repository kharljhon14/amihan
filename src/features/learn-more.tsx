import Button from '../components/button';

export default function LearnMore() {
  return (
    <div className="bg-[url(/images/footer.jpg)] bg-black/50 bg-blur bg-blend-multiply h-[50vh] bg-center bg-cover">
      <div className="w-full h-full text-white  overflow-hidden relative uppercase flex items-center justify-center flex-col gap-10">
        <div className="text-center">
          <h2 className="text-4xl mb-4">Discover the Story Behind the Shine</h2>
          <p>
            Beyond the surface lies a journey of design, craftsmanship, and the values we hold
            close.
          </p>
        </div>

        <Button>Learn More</Button>
      </div>
    </div>
  );
}
