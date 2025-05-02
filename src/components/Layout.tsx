import { IonContent } from "@ionic/react";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return(
        <>
            <IonContent fullscreen>
                {children}
            </IonContent>
        </>
    )
}

export default Layout;