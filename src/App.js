import './App.css';
import Accordian from './components/accordeon';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* {Accordian component} */}
     {/* < Accordian /> */}

      {/* {Random Color component} */}
      {/* < RandomColor /> */}

      {/* Star-Rating component */}
      {/* <StarRating /> */}

      {/* Image slider component */}
      < ImageSlider 
        url = {'https://picsum.photos/v2/list'} 
        limit={'5'} 
        page = {'10'}/>

      
     

    </div>
  );
}

export default App;
