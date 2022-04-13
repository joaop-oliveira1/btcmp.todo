import {defineNuxtPlugin} from "#app";
import {createClient} from "contentful";


export default defineNuxtPlugin((nuxtApp) => {
    const contentfulClient = createClient({
        space: nuxtApp.$config.contentful.spaceId,
        accessToken: nuxtApp.$config.contentful.accessToken,
        environment: nuxtApp.$config.contentful.env
    });

    function fetchHeroSectionContent() {
        return contentfulClient.getEntry("1JUTjQCM2AzXjuW1jPdXlF")
    }

    return {
        provide: {
            contentful: {
                fetchHeroSectionContent
            }
        }
    }
})