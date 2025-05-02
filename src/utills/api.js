import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3006",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 15000
});

export const _post = async ({endpointUrl, payload, callback, errcallback}) => {
    try {
        const response = await axiosInstance.post(endpointUrl, payload);
        if(callback) callback(response);
        console.log(response);
        return response;
    }catch (e) {
        if(errcallback){
            errcallback(e);
        }
        throw e;
    }
}