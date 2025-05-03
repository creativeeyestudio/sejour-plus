import { IonContent } from '@ionic/react';
import './Home.sass';
import Card from '../components/Card';

const Home: React.FC = () => {
	return (
		<IonContent className='ion-padding-top ion-padding-horizontal'>
			<section className='content ion-padding-horizontal'>
				<h1>Nom de l'hôtel</h1>
				<div className='ion-margin-vertical'>
					<Card src={'https://ionicframework.com/docs/img/demos/card-media.png'} title={'Découvrir nos services'} link={'services'} />
				</div>
				<div className='ion-margin-vertical'>
					<Card src={'https://ionicframework.com/docs/img/demos/card-media.png'} title={'Voir nos activités'} link={'activites'} />
				</div>
				<div className='ion-margin-vertical'>
					<Card src={'https://ionicframework.com/docs/img/demos/card-media.png'} title={'Découvrir notre région'} link={'regions'} />
				</div>
			</section>
		</IonContent>
		
	);
};

export default Home;
