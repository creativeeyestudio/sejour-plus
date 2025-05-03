import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react"

const Activities = () => {
    return(
        <section>
            <h1>Activités et Expériences</h1>
            <div className='ion-margin-vertical'>
				<IonCard className='ion-no-margin content__card' routerDirection={'forward'}>
					<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
					<IonCardHeader>
						<IonCardTitle children="Nom du service" />
					</IonCardHeader>
				</IonCard>
			</div>
        </section>
    )
}

export default Activities