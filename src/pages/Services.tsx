import { IonAccordion, IonAccordionGroup, IonAvatar, IonContent, IonIcon, IonItem, IonLabel } from "@ionic/react"
import { arrowDownOutline, bedOutline } from "ionicons/icons"

import '../public/components/accordion.sass'
import { useEffect, useState } from "react"
import { ServiceList } from "../interfaces/service"
import Api from "../services/apiplatform"

const Services = () => {
    const [data, setData] = useState<ServiceList | null>(null);

    useEffect(() => {
        async function fetchData() {
            const dataFetch = await new Api().getServices();
            setData(dataFetch);
        }

        fetchData();
    }, [])

    if(!data) return <p>Chargement en cours</p>

    return(
        <IonContent className='ion-padding-top ion-padding-horizontal'>
            <section className="ion-padding-horizontal">
                <h1>Nos services</h1>
                <IonAccordionGroup className="ion-padding-top">
                    {data.totalItems < 1 && <p>Aucun service n'a encore été ajouté</p>}
                    {data.member.map((service) => (
                        <IonAccordion key={service.id} value="first" toggleIcon={arrowDownOutline} toggleIconSlot="end">
                            <IonItem slot="header" color="primary">
                                <IonAvatar>
                                    <IonIcon icon={bedOutline} size="large"></IonIcon>
                                </IonAvatar>
                                <IonLabel class="ion-padding-start">{service.serviceName}</IonLabel>
                            </IonItem>
                            <div className="ion-padding" slot="content">
                                {service.serviceDesc}
                            </div>
                        </IonAccordion>    
                    ))}
                </IonAccordionGroup>
            </section>     
        </IonContent>
    )
}

export default Services