import { IonButton, IonContent } from '@ionic/react'
import LayoutItem from '../components/LayoutItem'
import { useEffect, useState } from 'react'
import { Tourism } from '../interfaces/tourism';
import { useParams } from 'react-router';
import Api from '../services/apiplatform';
import { Browser } from '@capacitor/browser';

interface RouteParams {
  id: string;
}

async function openReserveModal(url: string) {
    await Browser.open({ 
        url: url,
        presentationStyle: 'popover'
    });
}

const Region = () => {
    const { id } = useParams<RouteParams>();
    const [data, setData] = useState<Tourism | null>(null);

    useEffect(() => {
        async function fetchData() {
            const api = await new Api();
            const dataFetch: Tourism = await api.getTourism(`/api/tourism/${id}`);
            setData(dataFetch);
        }

        fetchData();
    }, [id])

    if (!data) return <p>Chargement en cours</p>

    return(
        <IonContent>
            <LayoutItem title={data.tourismName} image={'https://ionicframework.com/docs/img/demos/card-media.png'}>
                <div className="text-content ion-margin-vertical">
                    {data.tourismContent}
                </div>
                <div className="btn-list">
                    {data.tourismPhone 
                        ? <IonButton className="ion-margin-end ion-margin-bottom" href={`tel:${data.tourismPhone}`}>Appeler</IonButton>
                        : <></>
                    }
                    {data.tourismReserve 
                        ? <IonButton className="ion-margin-end ion-margin-bottom" onClick={() => openReserveModal(data.tourismReserve)}>Réserver</IonButton> 
                        : <></>}
                    <IonButton className="ion-margin-end ion-margin-bottom">Localiser sur Google Maps</IonButton>
                </div>
            </LayoutItem>
        </IonContent>
    )
}

export default Region