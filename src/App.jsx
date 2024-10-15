import "./App.css";
import BlogContent from "./Components/BlogContent/BlogContent";
import BlogHeader from "./Components/BlogHeader/BlogHeader";
import FooterComponent from "./Components/Footer/Footer";
import MediaKit from "./Components/MediaKit/MediaKit";
import MobileNavigation from "./Components/MobileNavigation/MobileNavigation";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Partner from "./Components/Partner/Partner";
import "./index.css";

function App() {
  return (
    <>
      <div className="lg:hidden">
        <MobileNavigation />
      </div>

      <div className="hidden lg:block">
        <NavigationBar />
      </div>

      <BlogHeader />
      <BlogContent />
      <MediaKit />
      <Partner />
      <FooterComponent />
    </>
  );
}

export default App;
