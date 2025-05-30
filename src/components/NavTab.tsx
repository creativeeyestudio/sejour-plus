import { IonIcon, IonTabBar, IonTabButton } from "@ionic/react"
import { bedOutline, businessOutline, locationOutline, notificationsOutline } from 'ionicons/icons';

import '../public/layouts/nav-tab.sass'

const NavTab = () => {
    return (
        <IonTabBar slot='bottom'>
            <IonTabButton tab="services" href='/services'>
                <IonIcon icon={ bedOutline }></IonIcon>
            </IonTabButton>
            <IonTabButton tab="activites" href='/activites'>
                <IonIcon icon={ businessOutline }></IonIcon>
            </IonTabButton>
            <IonTabButton tab="regions" href="/regions">
                <IonIcon icon={ locationOutline }></IonIcon>
            </IonTabButton>
            <IonTabButton tab="infos-hotel" href="/infos-hotel">
                <IonIcon icon={ notificationsOutline }></IonIcon>
            </IonTabButton>
        </IonTabBar>
    )
}

export default NavTab