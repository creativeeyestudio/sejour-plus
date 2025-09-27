import { useEffect, useState } from "react";
import Card from "./Card";
import Api from "../services/apiplatform";
import { Activity } from "../interfaces/activity";
import { Tourism } from "../interfaces/tourism";

interface ServiceLinkProps {
    slugLink: string;
    type: "activity" | "tourism";
}

const ActivityLink = ({ slugLink, type }: ServiceLinkProps) => {
    const [data, setData] = useState<Activity | Tourism | null>(null);

    useEffect(() => {
        async function fetchData() {
            let dataFetch: Activity | Tourism | null = null;

            switch (type) {
                case "activity":
                    dataFetch = await new Api().getActivity(slugLink);
                    break;
                case "tourism":
                    dataFetch = await new Api().getTourism(slugLink);
                    break;
            }

            setData(dataFetch);
        }

        fetchData();
    }, [slugLink, type]);

    if (!data) return <></>;

    return (
        <Card
            src={"https://ionicframework.com/docs/img/demos/card-media.png"}
            title={"actName" in data ? data.actName : data.tourismName}
            link={
                "actName" in data
                    ? `/activite/${data.id.toString()}`
                    : `/tourisme/${data.id.toString()}`
            }
        />
    );
};

export default ActivityLink;
