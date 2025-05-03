import { IonAccordion, IonAccordionGroup, IonAvatar, IonIcon, IonItem, IonLabel } from "@ionic/react"
import { arrowDownOutline, bedOutline } from "ionicons/icons"

const Services = () => {
    return(
        <section>
            <h1>Nos services</h1>
            <IonAccordionGroup>
                <IonAccordion value="first" toggleIcon={arrowDownOutline} toggleIconSlot="end">
                    <IonItem slot="header" color="light">
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
                    <IonItem slot="header" color="light">
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
    )
}

export default Services