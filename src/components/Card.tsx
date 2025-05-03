import { IonCard, IonCardHeader, IonCardTitle, IonImg } from "@ionic/react"
import '../public/components/card.sass'

type CardProps = {
    src: string
    title: string
    link: string
}

const Card: React.FC<CardProps> = ({src, title, link}) => {
    return (
        <IonCard className='ion-no-margin' routerDirection={'forward'} routerLink={link}>
            <IonImg alt={title} src={src}></IonImg>
            <IonCardHeader>
                <IonCardTitle children={title} />
            </IonCardHeader>
        </IonCard>
    )
}

export default Card