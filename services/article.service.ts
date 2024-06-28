import { APIError, devMode } from "@/utils";

import Axios from "@/utils/Axios";
import { IArticleQueries } from './../interface/index';
import { ServerCallback } from "@/interface";

export default class ArticleServices {
    static async getGlobalFeed(queries: IArticleQueries, callback: ServerCallback) {
        try {
            // Build query string based on keys and values in queries object
            const queryString = Object.keys(queries)
                .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queries[key as keyof IArticleQueries] ?? '')}`)
                .join('&');

            console.log(queryString)

            const { data } = await Axios({
                url: `/articles?${queryString}`,
                method: "GET",
            });

            callback(null, data);
        } catch (error) {
            devMode && console.log(`get /global feed`, error);
            callback(APIError(error))
        }
    }

    static async getArticle(slug: string, callback: ServerCallback) {
        try {
            const { data } = await Axios({
                url: `/articles/${slug}`,
                method: "GET",
            });

            callback(null, data);
        } catch (error) {
            devMode && console.log(`get /single article`, error);
            callback(APIError(error))
        }
    }

    static async getArticleComments(slug: string, callback: ServerCallback) {
        try {
            const { data } = await Axios({
                url: `/articles/${slug}/comments`,
                method: "GET",
            });

            callback(null, data);
        } catch (error) {
            devMode && console.log(`get /article comments`, error);
            callback(APIError(error))
        }
    }

    static async getTags(callback: ServerCallback) {
        try {
            const { data } = await Axios({
                url: `/tags`,
                method: "GET",
            });

            callback(null, data);
        } catch (error) {
            devMode && console.log(`get /tags`, error);
            callback(APIError(error))
        }
    }

}