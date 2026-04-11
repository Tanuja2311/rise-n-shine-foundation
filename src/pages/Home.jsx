import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import Programs from '../components/home/Programs';
import Awards from '../components/home/Awards';
import DonateCTA from '../components/home/DonateCTA';
import NewsTeaser from '../components/home/NewTeaser';

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Programs />
      <Awards />
      <DonateCTA />
      <NewsTeaser />
    </>
  );
}
