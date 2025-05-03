import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react"
import LayoutItem from "../components/LayoutItem"
import { callOutline, linkOutline, mailOutline, mapOutline } from "ionicons/icons"

import '../public/pages/infos.sass'

const Infos = () => {
    return(
        <LayoutItem title={"Nom de l'hotel"} image={"https://ionicframework.com/docs/img/demos/card-media.png"}>
            <IonGrid>
                <IonRow>
                    <IonCol size='3' className="ion-text-center">
                        <IonButton shape="round" size="large">
                            <IonIcon slot="icon-only" size="large" icon={callOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                    <IonCol size='3' className="ion-text-center">
                        <IonButton shape="round" size="large">
                            <IonIcon slot="icon-only" size="large" icon={mailOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                    <IonCol size='3' className="ion-text-center">
                        <IonButton shape="round" size="large">
                            <IonIcon slot="icon-only" size="large" icon={mapOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                    <IonCol size='3' className="ion-text-center">
                        <IonButton shape="round" size="large">
                            <IonIcon slot="icon-only" size="large" icon={linkOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
                <hr />
                <IonRow>
                    <IonCol size="6" children={'Check-In'} />
                    <IonCol size="6" children={'00h00'} class="ion-text-end" />
                    <IonCol size="6" children={'Check-Out'} />
                    <IonCol size="6" children={'00h00'} class="ion-text-end" />
                </IonRow>
                <hr />
                <IonRow>
                    <IonCol size="12">
                        <p>Infos Wi-Fi</p>
                        <ul>
                            <li>Nom du Wi-Fi :</li>
                            <li>Mot de passe :</li>
                        </ul>
                        <p><em>Appuyez pour copier-coller le Mot de Passe</em></p>
                    </IonCol>
                </IonRow>
                <hr />
                <IonRow>
                    <IonCol size="6" children={'Code Parking'} />
                    <IonCol size="6" children={'************'} class="ion-text-end" />
                </IonRow>
            </IonGrid>
        </LayoutItem>
    )
}

export default Infos