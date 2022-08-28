import FirstSection from "./Components/First/FirstSection";
import SecondSection from "./Components/Second/SecondSection";
import ThirdSection from "./Components/Third/ThirdSection";
import './fontawesome/font'
import 'animate.css';

function App() {
  return (
    <div className="main">
      
      <FirstSection 
      navOne ='FOXPRO'
      navTwo = 'CONTACT US'
      h1 = 'NOTHING CAN STOP'
      h3 = 'A GOOD IDEA'
      a = 'INTRO VIDEO'
      img = '/IMAGES/Define Curl Creme _ FORM Beauty.jpg'
      />

      <SecondSection
      h1 = 'FOXPRO'
      h3 = 'PRODUCT DESIGN IDEA'
      p = 'Branding Iphone creative Alva success holy grail technology long tail analysis metrics business plan focus social media. Patch partnership crowdsource graphical user interface innovator series A financing first mover advantage ramen partnership crowdsource graphical user interface'
      p2 = 'supply chain facebook ownership non-disclosure agreement scrum project value proposition'
      img = '/IMAGES/Feminine Product Photography Ideas.jpg'
      />

      <ThirdSection
      h1 = 'PRODUCT FOR'
      h3 = 'FUTURE'
      p = 'Pitch innovator series A financing first mover advantage ramen partnership crowdsource graphical user interface innovator series A financing first mover advantage ramen partnership crowdsource graphical user interface'
      p2 = 'supply chain facebook ownership non-disclosure agreement scrum project value proposition'
      a = 'ORDER NOW'
      img = '/IMAGES/p.jpg'
      />

      <copyWrite>
        <h6 className="text-center m-5 bg-dark text-light p-4">All Rights Reserved By <span style={{color : '#BCB2E2', fontWeight: '700' , fontSize : '20px'}}>Gad Reda</span> | 2022 &copy;</h6>
      </copyWrite>

    </div>
  );
}

export default App;
