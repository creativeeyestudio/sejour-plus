import { IonButton, IonContent, IonImg } from "@ionic/react"
import './Activity.sass'

const Activity = () => {
    return(
        <IonContent>
            <section>
                <figure className="ion-no-margin">
                    <IonImg src="https://ionicframework.com/docs/img/demos/card-media.png"></IonImg>
                </figure>
                <div className="content-page ion-padding">
                    <div className="ion-padding-horizontal">
                        <h1 className="ion-margin-bottom">Nom de l'activité</h1>
                        <div className="text-content ion-margin-vertical"></div>
                        <div className="btn-list">
                            <IonButton className="ion-margin-end ion-margin-bottom">Appeler</IonButton>
                            <IonButton className="ion-margin-end ion-margin-bottom">Réserver une table</IonButton>
                            <IonButton className="ion-margin-end ion-margin-bottom">Localiser sur Google Maps</IonButton>
                        </div>
                    </div>
                </div>
            </section>    
        </IonContent>
    )
}

export default Activity