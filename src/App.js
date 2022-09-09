import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import HomePage from "./Components/HomePage";
import Team from "./Components/Team";
import Testimony from "./Components/Testimony";
import Why from "./Components/Why";
import WriteUp from "./Components/WriteUp";
import WriteUp0 from "./Components/WriteUp0";
import WriteUp2 from "./Components/WriteUp2";
import Watsaap from "./Components/Watsaap";


function App() {
  
  return (
  <div className=" space-y-12 relative">
    <HomePage />
    <WriteUp0 />
    <WriteUp />
    <WriteUp2 />
    <Why />
    <Testimony />
    <Form />
    <Team />
    <FAQ />
    <Footer />
    <Watsaap />
  </div>
  );
}

export default App;
