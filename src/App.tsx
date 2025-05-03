import { Route } from 'react-router-dom';
import { IonApp, IonContent, IonRouterOutlet, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Header from './components/Header';
import NavTab from './components/NavTab';
import Services from './pages/Services';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
	<Header />
		<IonReactRouter>
			<IonTabs className='ion-padding-top'>
				<IonRouterOutlet className='ion-padding-top'>
					<IonContent className='ion-padding-top ion-padding-horizontal'>
						<Route exact path="/" render={() => <Home />} />
						<Route exact path='/services' render={() => <Services />} />
					</IonContent>
				</IonRouterOutlet>
				<NavTab />
			</IonTabs>
		</IonReactRouter>
  </IonApp>
);

export default App;
