import axios from "axios";

export const api = axios.create({
    baseURL: "https://qfbrz4ultlqssjswhbuairazii0plrth.lambda-url.us-east-1.on.aws/"
})