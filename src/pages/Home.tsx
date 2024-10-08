import Banner from "../components/ui/Banner"
import Categories from "../components/ui/categories/Categories"
import ContactUs from "../components/ui/contactUs/ContactUs"
import { FeaturedSection } from "../components/ui/featured/FeaturedSection"


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedSection></FeaturedSection>
      <Categories></Categories>
      <ContactUs></ContactUs>
    </div>
  )
}

export default Home