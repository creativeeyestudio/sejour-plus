import { IonButton, IonContent } from '@ionic/react'
import LayoutItem from '../components/LayoutItem'
import { useEffect, useState } from 'react'
import { Activity } from '../interfaces/activity'
import Api from '../services/apiplatform'
import { useParams } from 'react-router'
import { HotelData } from '../interfaces/HotelData'
import { Browser } from '@capacitor/browser'

interface RouteParams {
  id: string;
}

async function openReserveModal(url: string) {
    await Browser.open({ 
        url: url,
        presentationStyle: 'popover'
    });
}

const ActivityPage = () => {
    const { id } = useParams<RouteParams>();
    const [data, setData] = useState<Activity | null>(null);
    const [hotel, setHotel] = useState<HotelData | null>(null);

    useEffect(() => {
        async function fetchData() {
            const api = await new Api();
            const dataFetch: Activity = await api.getActivity(`/api/activites/${id}`);
            const hotelFetch: HotelData = await api.getHotelData();
            setData(dataFetch);
            setHotel(hotelFetch);
        }

        fetchData()
    }, [id])

    if (!data || !hotel) return <p>Chargement en cours</p>

    return(
        <IonContent>
            <LayoutItem title={data.actName} image={'https://ionicframework.com/docs/img/demos/card-media.png'}>
                <div className="text-content ion-margin-vertical">
                    {data.actContent}
                </div>
                <div className="btn-list">
                    <IonButton className="ion-margin-end ion-margin-bottom" href={`tel:${hotel.hotelPhone}`}>Appeler</IonButton>
                    {data.actReserve 
                        ? <IonButton className="ion-margin-end ion-margin-bottom" onClick={() => openReserveModal(data.actReserve)}>Réserver</IonButton> 
                        : <></>}
                </div>
            </LayoutItem>
        </IonContent>
    )
}

export default ActivityPage