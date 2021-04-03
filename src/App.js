import './App.css';
import './styles.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import AllSpotPage from './component/AllSpotPage';
import CitySpotPage from './component/CitySpotPage';
import SideDrawer from './component/SideDrawer';

function App() {
	return (
        <div className="App">
            <div className="app-content">
                <SideDrawer/>
                <Switch>
                    <Route path='/' exact render={()=><Redirect to='/scenicSpot'/>}/>
                    <Route path='/scenicSpot' exact component={AllSpotPage}/>
                    <Route path='/scenicSpot/:city' component={CitySpotPage}/>
                </Switch>
            </div>
		</div>
	);
}

export default App;
