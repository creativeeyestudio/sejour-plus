import { IonIcon, IonTabBar, IonTabButton } from "@ionic/react"
import { bedOutline, businessOutline, locationOutline, notificationsOutline } from 'ionicons/icons';

const NavTab = () => {
    return (
        <IonTabBar slot='bottom'>
            <IonTabButton tab="services" href='/services'>
                <IonIcon icon={ bedOutline }></IonIcon>
            </IonTabButton>
            <IonTabButton tab="activites" href='/activites'>
                <IonIcon icon={ businessOutline }></IonIcon>
            </IonTabButton>
            <IonTabButton>
                <IonIcon icon={ locationOutline }></IonIcon>
            </IonTabButton>
            <IonTabButton>
                <IonIcon icon={ notificationsOutline }></IonIcon>
            </IonTabButton>
        </IonTabBar>
    )
}

export default NavTab