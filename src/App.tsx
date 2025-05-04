import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Google Fonts */

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
/* import '@ionic/react/css/palettes/dark.system.css'; */

/* Theme variables */
import './public/theme/variables.css';
import Header from './components/Header';
import NavTab from './components/NavTab';
import Services from './pages/Services';
import Activities from './pages/Activities';
import Activity from './pages/Activity';
import Regions from './pages/Regions';
import Region from './pages/Region';
import Infos from './pages/Infos';

setupIonicReact({
	mode: 'ios',
	animated: true
});

const App: React.FC = () => (
  	<IonApp>
		<Header />
		<IonReactRouter>
			<IonTabs className='ion-padding-top'>
				<IonRouterOutlet className='ion-padding-top'>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path='/services' render={() => <Services />} />
					<Route exact path='/activites' render={() => <Activities />} />
					<Route path='/activite/:id' render={() => <Activity />} />
					<Route exact path='/regions' render={() => <Regions />} />
					<Route exact path='/region/:id' render={() => <Region />} />
					<Route exact path='/infos-hotel' render={() => <Infos />} />
				</IonRouterOutlet>
				<NavTab />
			</IonTabs>
		</IonReactRouter>
	</IonApp>
);

export default App;
