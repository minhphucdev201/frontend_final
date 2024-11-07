import axiosClient from "./axiosClient";

const HomePageApi = {
    getAll(){
        const url = "/games/getall";
        return axiosClient.get(url);
    },
    getUehReview(params){
        const url = "/games?genre=recently";
        return axiosClient.get(url,{ params});
    },

}

export default HomePageApi;