
import './App.css';
import Header from './Components/Header/Header.js'
import SliderImages from './Components/SliderImages';
import CardSlider from './Components/CardSlider';
import Premiere from './Components/Premiere';
import Footer from './Components/Footer'
// import AllMovies from './Components/AllMovies'
import AllMoviesFetch from './Components/AllMoviesFetch'
// import SingleMovie from './Components/SingleMovie'
import SingleMovieFetch from './Components/SingleMovieFetch';
import Register from './Components/Register';

// React-Router-DOM imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {
  return (

    <Router>
        <div>
    
             <Header/>     {/*//Header and Footer components outside Switch bcz same for all pages on routing */}
            

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}  

                <Switch>
                  <Route exact path="/">
                    <SliderImages/>
                    <CardSlider/>
                    <Premiere/>
                  </Route>
                  <Route exact path="/movies">  {/* EXACT is used to avoid rendering VERY FIRST MATCHING ROUTE and render only the EXACT one required */}
                    {/* <AllMovies/> */}
                    <AllMoviesFetch/>
                  </Route>
                  <Route exact path = "/movies/:movid">
                    {/* <SingleMovie/> */}
                    <SingleMovieFetch/>
                  </Route>
                  <Route exact path = "/register">
                    <Register/>
                  </Route>
                    
                </Switch>
              
            <Footer/>
      </div>
     </Router>
    
  );
}

export default App;
