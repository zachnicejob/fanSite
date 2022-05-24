import { Switch, Route } from  'react-router-dom';
import GeneralPosts from './components/generalposts/GeneralPosts';
import GeneralPost from './components/generalposts/GeneralPost';
import Events from './components/events/Events';
import Event from './components/events/Event';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Switch>
          <Route path={"/generalPosts/:id"}>
              <GeneralPost />
          </Route>
          <Route path={"/generalPosts"}>
            <GeneralPosts />
          </Route>
          <Route path={"/events/:id"}>
            <Event />
          </Route>
          <Route path={"/events"}>
            <Events />
          </Route>
          <Route exact path={"/"}>
            <Homepage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
