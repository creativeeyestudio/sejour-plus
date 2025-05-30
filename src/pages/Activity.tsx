import { IonButton, IonContent } from '@ionic/react'
import LayoutItem from '../components/LayoutItem'

const Activity = () => {
    return(
        <IonContent>
            <LayoutItem title={"Nom de l'activité"} image={'https://ionicframework.com/docs/img/demos/card-media.png'}>
                <div className="text-content ion-margin-vertical"></div>
                <div className="btn-list">
                    <IonButton className="ion-margin-end ion-margin-bottom">Appeler</IonButton>
                    <IonButton className="ion-margin-end ion-margin-bottom">Réserver une table</IonButton>
                    <IonButton className="ion-margin-end ion-margin-bottom">Localiser sur Google Maps</IonButton>
                </div>
            </LayoutItem>
        </IonContent>
    )
}

export default Activity