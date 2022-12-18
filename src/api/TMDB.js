import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: 'application/json'
    },
    params:{
        api_key: '6d47a4eb4a550f0aec87d70e03ce12ae'
    }
})