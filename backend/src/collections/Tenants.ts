import { CollectionConfig } from "payload";

export const Tenants: CollectionConfig = {
    slug: "tenants",
    admin: {
        useAsTitle: 'site_name',
    },
    labels: {
        singular: "Etablissement",
        plural: "Etablissements"
    },
    fields: [
        {
            name: 'site_name',
            type: 'text',
            label: "Nom de l'établissement"
        },
        {
            name: 'site_url',
            type: 'text',
            label: "Lien de l'instance"
        }
    ],
}