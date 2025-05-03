import { IonCard, IonCardHeader, IonCardTitle, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView } from "@ionic/react"
import './Activities.sass'

const Activities = () => {
    return(
        <section>
            <h1>Activités et Expériences</h1>

            <IonSegmentView>
                <IonSegmentContent id="detente">
                    <div className='ion-margin-vertical'>
                        <IonCard className='ion-no-margin content__card' routerDirection={'forward'}>
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                            <IonCardHeader>
                                <IonCardTitle children="Nom du service Détente" />
                            </IonCardHeader>
                        </IonCard>
                    </div>
                </IonSegmentContent>

                <IonSegmentContent id="gastronomie">
                    <div className='ion-margin-vertical'>
                        <IonCard className='ion-no-margin content__card' routerDirection={'forward'}>
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                            <IonCardHeader>
                                <IonCardTitle children="Nom du service Gastronomie" />
                            </IonCardHeader>
                        </IonCard>
                    </div>
                </IonSegmentContent>

                <IonSegmentContent id="nature">
                    <div className='ion-margin-vertical'>
                        <IonCard className='ion-no-margin content__card' routerDirection={'forward'}>
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                            <IonCardHeader>
                                <IonCardTitle children="Nom du service Nature" />
                            </IonCardHeader>
                        </IonCard>
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
    )
}

export default Activities