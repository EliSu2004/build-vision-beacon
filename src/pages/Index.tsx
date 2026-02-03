import Layout from '@/components/layout/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <FeaturesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
