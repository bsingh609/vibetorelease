import dynamic from 'next/dynamic';
import { Header, Hero, Footer } from '@/components';

// Lazy load components below the fold for better performance
const Problem = dynamic(() => import('@/components/Problem'), {
  loading: () => <div className="min-h-screen" />,
});

const Solution = dynamic(() => import('@/components/Solution'), {
  loading: () => <div className="min-h-screen" />,
});

const Different = dynamic(() => import('@/components/Different'), {
  loading: () => <div className="min-h-screen" />,
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="min-h-screen" />,
});

const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="min-h-[500px]" />,
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Different />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
