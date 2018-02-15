var axios = require('axios');
module.exports = function(app) {

    //retrieve articles from nyt api
    app.get("/api/fetchnewarticles", function(req, res) {
        //base url
        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=" + process.env.NYTAPIKEY;
        //double check mandatory query
        if (!req.query.query) {
            return res.status(400).json("Error: Missing query");
        }
        //build query url
        queryUrl += "&q=" + req.query.query;
        //only add start and end dates if they exist. expecting format YYYYMMDD
        queryUrl += (req.query.startDate) ? "&begin_date=" + req.query.startDate : "";
        queryUrl += (req.query.endDate) ? "&end_date=" + req.query.endDate : "";
        console.log(queryUrl);

        //make axios call
        axios.get(queryUrl)
             .then(function(response){
                console.log(response.data);
                res.status(200).json(response.data)
             })
             .catch(function(error) {
                 console.error(error);
             });

    });
}