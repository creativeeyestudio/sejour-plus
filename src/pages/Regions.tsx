import { IonCard, IonCardHeader, IonCardTitle, IonContent, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView } from "@ionic/react"
import './Activities.sass'

const Regions = () => {
    return(
        <IonContent className='ion-padding-top ion-padding-horizontal'>
            <section>
                <h1 className="ion-padding-horizontal">Découvrir notre région</h1>

                <IonSegmentView>
                    <IonSegmentContent id="detente" className="ion-padding-horizontal">
                        <div className='ion-margin-vertical'>
                            <IonCard className='ion-no-margin content__card' routerDirection={'forward'} routerLink='activite/1'>
                                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                                <IonCardHeader>
                                    <IonCardTitle children="Nom du service Détente" />
                                </IonCardHeader>
                            </IonCard>
                        </div>
                    </IonSegmentContent>

                    <IonSegmentContent id="gastronomie" className="ion-padding-horizontal">
                        <div className='ion-margin-vertical'>
                            <IonCard className='ion-no-margin content__card' routerDirection={'forward'} routerLink='activite/1'>
                                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                                <IonCardHeader>
                                    <IonCardTitle children="Nom du service Gastronomie" />
                                </IonCardHeader>
                            </IonCard>
                        </div>
                    </IonSegmentContent>

                    <IonSegmentContent id="nature" className="ion-padding-horizontal">
                        <div className='ion-margin-vertical'>
                            <IonCard className='ion-no-margin content__card' routerDirection={'forward'} routerLink='activite/1'>
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
        </IonContent>
    )
}

export default Regions