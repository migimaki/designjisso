import Footer from "@/components/footer";
import GridList from "@/components/gridlist";
import Header from "@/components/header";
import Tagline from "@/components/tagline";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <Header />
        <Tagline />
        <GridList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
