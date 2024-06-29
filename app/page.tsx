import Home from "./pages/Home";
import HeaderMain from "@/app/components/HeaderMain";
import HeaderTop from "@/app/components/HeaderTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="bg-[#EAF0ED] h-full w-full">
      <HeaderTop />
      <HeaderMain />
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
}
