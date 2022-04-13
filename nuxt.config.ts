import {defineNuxtConfig} from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    components: true,
    css: [
        '~/assets/css/index.css'
    ],
    publicRuntimeConfig: {
        contentful: {
            accessToken: process.env.CONTENTFUL_API_KEY,
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            env: process.env.CONTENTFUL_ENV
        }
    }
})
