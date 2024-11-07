import axiosClient from "./axiosClient";

const HomePageApi = {
    getAll(){
        const url = "/games/getall";
        return axiosClient.get(url);
    },
    getTopGame(){
        const url = "/games/topgame";
        return axiosClient.get(url);
    },
    getUehReview(){
        const url = "/games/uehreview";
        return axiosClient.get(url);
    },
    getUehGreen(){
        const url = "/games/uehgreen";
        return axiosClient.get(url);
    },
    getUehEduGames(){
        const url = "/games/edugames";
        return axiosClient.get(url);
    }
}

export default HomePageApi;