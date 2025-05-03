import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from "@ionic/react"
import { arrowDownOutline } from "ionicons/icons"

const Services = () => {
    return(
        <section>
            <h1>Nos services</h1>
            <IonAccordionGroup>

                <IonAccordion value="first" toggleIcon={arrowDownOutline} toggleIconSlot="end">
                    <IonItem slot="header">
                        <IonLabel>Nom du service</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                        <p>Contenu du service</p>
                    </div>
                </IonAccordion>

                <IonAccordion value="second" toggleIcon={arrowDownOutline} toggleIconSlot="end">
                    <IonItem slot="header">
                        <IonLabel>Nom du service</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                        <p>Contenu du service</p>
                    </div>
                </IonAccordion>
                
                <IonAccordion value="third" toggleIcon={arrowDownOutline} toggleIconSlot="end">
                    <IonItem slot="header">
                        <IonLabel>Nom du service</IonLabel>
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