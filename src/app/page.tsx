import OfferCategories from '../components/Home/offers/OfferCategories';
import StoryBar from '../components/Home/StoryBar';
import TopCategories from '../components/Home/TopCategories';
import BestSellers from '../components/Home/BestSellers';
import BestCategories from '../components/Home/BestCategories';
import NewProducts from '../components/Home/NewProducts';
import Brands from '../components/Home/Brands';
import HomeArticles from '../components/Home/HomeArticles';
import Offers from '../components/Home/offers/Offers';
import Slider from '../components/Home/Slliders/Slider';
import ProductOrderTracking from '../components/Store/ProductDitail/ProductOrderTracking';

export default function Home() {
  return (
    <main className='max-md:px-4'>
      <StoryBar />
      <Slider />
      <Offers />
      <OfferCategories />
      <TopCategories />
      <BestSellers />
      <BestCategories />
      <NewProducts />
      <Brands />
      <HomeArticles />
      <ProductOrderTracking />
    </main>
  );
}
