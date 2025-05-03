import { IonAccordion, IonAccordionGroup, IonAvatar, IonContent, IonIcon, IonItem, IonLabel } from "@ionic/react"
import { arrowDownOutline, bedOutline } from "ionicons/icons"

import '../public/components/accordion.sass'

const Services = () => {
    return(
        <IonContent className='ion-padding-top ion-padding-horizontal'>
            <section className="ion-padding-horizontal">
                <h1>Nos services</h1>
                <IonAccordionGroup className="ion-padding-top">
                    <IonAccordion value="first" toggleIcon={arrowDownOutline} toggleIconSlot="end">
                        <IonItem slot="header" color="primary">
                            <IonAvatar>
                                <IonIcon icon={bedOutline} size="large"></IonIcon>
                            </IonAvatar>
                            <IonLabel class="ion-padding-start">Nom du service</IonLabel>
                        </IonItem>
                        <div className="ion-padding" slot="content">
                            <p>Contenu du service</p>
                        </div>
                    </IonAccordion>
                    <IonAccordion value="second" toggleIcon={arrowDownOutline} toggleIconSlot="end">
                        <IonItem slot="header" color="primary">
                            <IonAvatar>
                                <IonIcon icon={bedOutline} size="large"></IonIcon>
                            </IonAvatar>
                            <IonLabel class="ion-padding-start">Nom du service</IonLabel>
                        </IonItem>
                        <div className="ion-padding" slot="content">
                            <p>Contenu du service</p>
                        </div>
                    </IonAccordion>
                </IonAccordionGroup>
            </section>     
        </IonContent>
    )
}

export default Services