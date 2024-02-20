import Navbar from './Components/NavBar';
import Blog from './Components/Home';
import BlogList from './Components/BlogList';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom';
import Create from './Components/Create';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import BlogDetails from './Components/BlogDetails';


function App() {
  return (
        <Router>
            <div className='App'>
              <Navbar/>
              <div className='content'>

                <Switch>
                  <Route exact path='/'>
                    <Blog/>
                  </Route>

                  <Route path='/create'>
                    <Create/>
                  </Route>

                  <Route path='/BlogList/:id'>
                    <BlogList/>
                  </Route>

                  <Route path='/Blog-details/:id'>
                    <BlogDetails/>
                  </Route>

                  <Route path='*'>
                    <NotFound/>
                  </Route>

        
                </Switch>
                </div>
            </div>
              
        </Router >

  );
}

export default App;
