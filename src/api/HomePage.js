import axiosClient from "./axiosClient";

const HomePageApi = {
    getAll(){
        const url = "/games/getall";
        return axiosClient.get(url);
    },

}

export default HomePageApi;