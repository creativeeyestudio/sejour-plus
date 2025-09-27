import {
  IonContent,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
} from "@ionic/react";
import { useEffect, useState } from "react";
import Api from "../services/apiplatform";
import { CategoryList } from "../interfaces/category";
import ActivityLink from "../components/ActivityLink";

const Activities = () => {
    const [categories, setCategories] = useState<CategoryList | null>(null);
    const [selectedSegment, setSelectedSegment] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
        const dataFetch: CategoryList = await new Api().getCategories("1");
        setCategories(dataFetch);

        // Initialiser le segment avec la première catégorie
        if (dataFetch?.member?.length) {
            setSelectedSegment(`cat-${dataFetch.member[0].id}`);
        }
        }

        fetchData();
    }, []);

    if (!categories || !selectedSegment) 
        return <IonContent className="ion-padding">Chargement...</IonContent>;

    return (
        <IonContent className="ion-padding-top ion-padding-horizontal">
            <section>
                <h1 className="ion-padding-horizontal">Activités et Expériences</h1>

                <IonSegment 
                    value={selectedSegment} 
                    onIonChange={(e: CustomEvent) => setSelectedSegment(e.detail.value as string)}>
                {categories.member.map((category) => (
                    <IonSegmentButton value={`cat-${category.id}`} contentId={`cat-${category.id}`} key={category.id}>
                        <IonLabel>{category.catName}</IonLabel>
                    </IonSegmentButton>
                ))}
                </IonSegment>

                <IonSegmentView>
                    {categories.totalItems < 1 && (
                        <p className="ion-margin">Aucune catégorie n'a encore été ajoutée</p>
                    )}
                    {categories.member.map((category) => (
                        <IonSegmentContent key={category.id} id={`cat-${category.id}`} className="ion-padding-horizontal">
                            {category.activities.length < 1 && (
                                <p className="ion-margin-vertical">
                                    Il n'y a pas encore d'activité dans cette catégorie
                                </p>
                            )}
                            {category.activities.map((activity, index) => (
                                <div key={index} className="ion-margin-vertical">
                                    <ActivityLink type="activity" slugLink={activity} />
                                </div>
                            ))}
                        </IonSegmentContent>
                    ))}
                </IonSegmentView>
            </section>
        </IonContent>
    );
};

export default Activities;
