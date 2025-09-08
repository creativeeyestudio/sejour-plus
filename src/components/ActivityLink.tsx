import { useEffect, useState } from "react";
import Card from "./Card";
import Api from "../services/apiplatform";
import { Activity } from "../interfaces/activity";

interface ServiceLinkProps {
    slugLink: string;
}

const ActivityLink = ({ slugLink }: ServiceLinkProps) => {
    const [data, setData] = useState<Activity | null>(null);

    useEffect(() => {
        async function fetchData() {
            const dataFetch: Activity = await new Api().getActivity(slugLink);
            setData(dataFetch);
        }

        fetchData();
    }, [slugLink])

    if (!data) return <></>

    return <Card src={"https://ionicframework.com/docs/img/demos/card-media.png"} title={data.actName} link={`/activite/${data.id.toString()}`} />
}

export default ActivityLink