import Button from '../components/button';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1
      }}
      className="bg-[url(/images/hero.jpg)] bg-gray-200 bg-blend-multiply h-[95vh] bg-center bg-cover"
    >
      <div className="w-full h-full overflow-hidden relative uppercase flex items-center justify-center flex-col gap-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 4
          }}
          className=" select-none text-white  text-9xl font-light"
        >
          La Princesse
        </motion.h2>
        <Button>Discover Our Icons</Button>
        <a
          href="#"
          className="bg-gray-800 -right-5 font-light bottom-28 fixed text-white text-lg -rotate-90 px-2 uppercase"
        >
          chat
        </a>
      </div>
    </motion.div>
  );
}
