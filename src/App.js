import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SlideBar from './Componets/Slider/SlideBar';
import NavBar from './Componets/NavBar/NavBar';
import About from './Componets/About/About';
import Resume from './Componets/Resume/Resume';
import Project from './Componets/Project/Project';
import Blog from './Componets/Blog/Blog';
import SingleService from './Componets/Project/SingleService/SingleService';


function App() {
  return (
    <Router>

      <div className='body'>

        <div className='container app-container'>
          <div className='row app-row'>
            <div className="col-lg-4 col-md-3">
              <div className='color-slid'>
                <SlideBar></SlideBar>
              </div>
            </div>
            <div className="col-lg-8 col-md-9 color-main">
              <div>
                <NavBar />
                <Switch>
                  <Route exact path='/'>
                    <About></About>
                  </Route>
                  <Route path='/About'>
                    <About></About>
                  </Route>
                  <Route path='/project/:serviceId'>
                    <SingleService></SingleService>
                  </Route>
                  <Route path='/project'>
                    <Project></Project>
                  </Route>

                  <Route path='/blog'>
                    <Blog></Blog>
                  </Route>
                  <Route path='/resume'>
                    <Resume></Resume>
                  </Route>

                  <Route >
                    <Redirect to='/'></Redirect>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>

        </div>
      </div >

    </Router>
  );
}

export default App;
