import axios from "axios";

export default {
    fetchNewArticles: function(query, startDate, endDate) {
        //build queryurl
        let queryurl = "/api/newsRoutes/fetchnewarticles?query=" + query;
        queryurl += startDate ? "&startDate=" + startDate : "";
        queryurl += endDate ? "&endDate=" + endDate : ""; 
        return axios.get(queryurl)
    },
    getSavedArticles: function() {
        return axios.get("/api/newsRoutes/");
    },
    saveNewsArticle: function(newsData) {
        return axios.post("/api/newsRoutes/", newsData);
    },
    deleteNewsArticle: function(id) {
        return axios.delete("/api/newsRoutes/" + id);
    }
};
