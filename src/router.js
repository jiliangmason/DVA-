import React from 'react';
import { Router, Route, IndexRoute} from 'dva/router';
import App from './components/App/App';
import Home from './routes/Home/Home';
import Login from './components/Login/Login';

const Detail = (location, cb)=>{
    require.ensure([], require=>{
      cb(null, require('./routes/Detail/Detail'))
    }, 'detail/:id');
};

const Film = (location, cb)=>{
    require.ensure([], require=>{
      cb(null, require('./routes/Film/Film'))
    }, 'film/:type');
};

const Cinema = (location, cb)=>{
    require.ensure([], require=>{
      cb(null, require('./routes/Cinema/Cinema'))
    }, 'cinema/:id');
};

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home}/>
        <Route path="login" component={Login} />
        <Route path="detail" getComponents={Detail}/>
        <Route path="film" getComponents={Film}/>
        <Route path="cinema" getComponents={Cinema}/>
      </Route>
    </Router>
  );

}

export default RouterConfig;
