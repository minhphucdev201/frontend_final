import axiosClient from "./axiosClient";

const ScoreApi = {
    getAll(){
        const url = "/score/getall";
        return axiosClient.get(url);
    },

}

export default ScoreApi;