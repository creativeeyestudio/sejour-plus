import { IonContent, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView } from "@ionic/react"
import './Activities.sass'
import Card from "../components/Card"

const Regions = () => {
    return(
        <IonContent className='ion-padding-top ion-padding-horizontal'>
            <section>
                <h1 className="ion-padding-horizontal">Découvrir notre région</h1>

                <IonSegmentView>
                    <IonSegmentContent id="detente" className="ion-padding-horizontal">
                        <div className='ion-margin-vertical'>
                            <Card src={"https://ionicframework.com/docs/img/demos/card-media.png"} title={"Nom du service Détente"} link={"region/1"}></Card>
                        </div>
                    </IonSegmentContent>

                    <IonSegmentContent id="gastronomie" className="ion-padding-horizontal">
                        <div className='ion-margin-vertical'>
                            <Card src={"https://ionicframework.com/docs/img/demos/card-media.png"} title={"Nom du service Gastronomie"} link={"region/1"}></Card>
                        </div>
                    </IonSegmentContent>

                    <IonSegmentContent id="nature" className="ion-padding-horizontal">
                        <div className='ion-margin-vertical'>
                            <Card src={"https://ionicframework.com/docs/img/demos/card-media.png"} title={"Nom du service Nature"} link={"region/1"}></Card>
                        </div>
                    </IonSegmentContent>
                </IonSegmentView>

                <IonSegment>
                    <IonSegmentButton value='detente' contentId="detente">
                        <IonLabel>Détente</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value='gastronomie' contentId="gastronomie">
                        <IonLabel>Gastronomie</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value='nature' contentId="nature">
                        <IonLabel>Nature</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </section>    
        </IonContent>
    )
}

export default Regions