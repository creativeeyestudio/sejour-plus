import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react"
import LayoutItem from "../components/LayoutItem"
import { callOutline, linkOutline, mailOutline, mapOutline } from "ionicons/icons"

import '../public/pages/infos.sass'
import { useEffect, useState } from "react"
import { HotelData } from "../interfaces/HotelData"
import Api from "../services/apiplatform"
import { ConvertDateHour } from "../lib/convertDateHour"

const Infos = () => {
    
    const [data, setData] = useState<HotelData | null>(null);

    function convertHour(value: string) {
        return new ConvertDateHour(value).convertToHour();
    }

    useEffect(() => {
        const api = new Api;
        const fetchData = async () => {
            const dataFetch = await api.getHotelData();
            setData(dataFetch);
        }

        fetchData();
    }, [])

    if (!data) return <p>Chargement en cours</p>

    return(
        <LayoutItem title={data.hotelName} image={"https://ionicframework.com/docs/img/demos/card-media.png"}>
            <IonGrid>
                <IonRow>
                    <IonCol size='3' className="ion-text-center">
                        <IonButton shape="round" size="large" href={`tel:${data.hotelPhone}`}>
                            <IonIcon slot="icon-only" size="large" icon={callOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                    <IonCol size='3' className="ion-text-center">
                        <IonButton shape="round" size="large" href={`mailto:${data.hotelEmail}`}>
                            <IonIcon slot="icon-only" size="large" icon={mailOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                    <IonCol size='3' className="ion-text-center">
                        <IonButton shape="round" size="large" href={`tel:${data.hotelMap}`}>
                            <IonIcon slot="icon-only" size="large" icon={mapOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                    {data.hotelWebsite ? <IonCol size='3' className="ion-text-center">
                        <IonButton shape="round" size="large"  href={`tel:${data.hotelWebsite}`}>
                            <IonIcon slot="icon-only" size="large" icon={linkOutline}></IonIcon>
                        </IonButton>
                    </IonCol> : <></>}
                </IonRow>
                <hr />
                <IonRow>
                    <IonCol size="6" children={'Check-In'} />
                    <IonCol size="6" children={convertHour(data.hotelCheckIn)} class="ion-text-end" />
                    <IonCol size="6" children={'Check-Out'} />
                    <IonCol size="6" children={convertHour(data.hotelCheckOut)} class="ion-text-end" />
                </IonRow>
                <hr />
                <IonRow>
                    <IonCol size="12">
                        <p>Infos Wi-Fi</p>
                        <ul>
                            <li>Nom du Wi-Fi : {data.hotelWifiName}</li>
                            <li>Mot de passe : ************</li>
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