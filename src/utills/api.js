import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3006/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 15000
});

const handleError = (error) => {
    console.log(error);
}

export const _post = async ({endpointUrl, payload, callback}) => {
    try {
        const response = await axiosInstance.post(endpointUrl, payload);
        if(callback) callback(response);
        console.log(response);
        return response;
    }catch (e) {
        handleError(e);
    }
}

export const _get = async ({endpointUrl, payload, callback}) => {
    try{
        return await axiosInstance.get(endpointUrl);
    }catch (error) {
        handleError(error);
    }
}
