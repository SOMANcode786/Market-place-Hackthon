

import Navbar1 from "./components/Home/Navbar1";
import Hero from "./components/Home/Hero";
import MoreProducts from "./components/Home/MoreProducts";
import Products from "./components/Home/Products";
import NewArrivals from "./components/Home/NewArrivals";
import Blog from "./components/Home/Blogs";
import Insta from "./components/Home/Insta";




export default function Home() {
  return (
    <div>
      <Navbar1/>
        <Hero />
       <MoreProducts/>
        <Products/>
       <NewArrivals/>
       <Blog/>
      <Insta/> 
      
     
    </div>
  );
}
