import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import './Home.sass';

const Home: React.FC = () => {
	return (
		<section className='content'>
			<h1>Nom de l'hôtel</h1>
			<div className='ion-margin-vertical'>
				<IonCard className='ion-no-margin content__card' routerLink='services' routerDirection={'forward'}>
					<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
					<IonCardHeader>
						<IonCardTitle children="Découvrir nos services" />
					</IonCardHeader>
				</IonCard>
			</div>
			<div className='ion-margin-vertical'>
				<IonCard className='ion-no-margin content__card'>
					<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
					<IonCardHeader>
						<IonCardTitle children="Card Title" />
					</IonCardHeader>
				</IonCard>
			</div>
			<div className='ion-margin-vertical'>
				<IonCard className='ion-no-margin content__card'>
					<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
					<IonCardHeader>
						<IonCardTitle children="Card Title" />
					</IonCardHeader>
				</IonCard>
			</div>
		</section>
	);
};

export default Home;
