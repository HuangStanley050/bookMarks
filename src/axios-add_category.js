import axios from "axios";

const instance = axios.create({
    baseURL: "https://bookmarks-25986.firebaseio.com/"
});

export default instance;
