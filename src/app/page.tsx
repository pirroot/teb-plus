import OfferCategories from '../components/Home/offers/OfferCategories';
import Slider from '../components/Home/Slider';
import StoryBar from '../components/Home/StoryBar';
import TopCategories from '../components/Home/TopCategories';
import BestSellers from '../components/Home/BestSellers';
import BestCategories from '../components/Home/BestCategories';
import NewProducts from '../components/Home/NewProducts';
import Brands from '../components/Home/Brands';
import HomeArticles from '../components/Home/HomeArticles';
import Offers from '../components/Home/offers/Offers';
import OrderTracking from '../components/Home/OrderTracking';

export default function Home() {
  return (
    <>
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
      <OrderTracking />
    </>
  );
}
