import { IonImg } from "@ionic/react"
import { ReactNode } from "react"

import '../public/layouts/layout-item.sass'

type LayoutItem = {
    title: string
    image: string
    children: ReactNode
}

const LayoutItem: React.FC<LayoutItem> = ({ title, image, children }) => {
    return(
        <section className="layout-item">
            <figure className="layout-item__image">
                <IonImg src={image} alt={title} />
            </figure>
            <div className="layout-item__content">
                <h1 className="layout-item__content__title" children={title} />
                {children}
            </div>
        </section>
    )
}

export default LayoutItem