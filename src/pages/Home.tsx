import { IonCard, IonCardHeader, IonCardTitle, IonContent } from '@ionic/react';
import './Home.sass';

const Home: React.FC = () => {
	return (
		<IonContent className='ion-padding-top ion-padding-horizontal'>
			<section className='content ion-padding-horizontal'>
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
					<IonCard className='ion-no-margin content__card' routerLink='activites' routerDirection={'forward'}>
						<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
						<IonCardHeader>
							<IonCardTitle children="Voir nos activités" />
						</IonCardHeader>
					</IonCard>
				</div>
				<div className='ion-margin-vertical'>
					<IonCard className='ion-no-margin content__card' routerLink='regions' routerDirection={'forward'}>
						<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
						<IonCardHeader>
							<IonCardTitle children="Découvrir notre région" />
						</IonCardHeader>
					</IonCard>
				</div>
			</section>
		</IonContent>
		
	);
};

export default Home;
