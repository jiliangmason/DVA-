import dva from 'dva';
import './index.less';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
//app.model(require("./models/users"));

app.model(require("./models/home"));


app.model(require("./models/film"));


app.model(require("./models/detail"));


// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
