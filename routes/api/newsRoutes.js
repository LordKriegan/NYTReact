const router = require("express").Router();
const newsController = require("../../controllers/newsController");
const axios = require('axios');

// Matches with "/api/newsRoutes/"
router
  .route("/")
  .get(newsController.findAll)
  .post(newsController.create)
//matches with "/api/newsRoutes/:id"
router
  .route("/:id")
  .delete(newsController.remove);

//retrieve articles from nyt api
router.route("/fetchnewarticles").get(function (req, res) {
    //base url
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=" + process.env.NYTAPIKEY;
    //double check mandatory query
    if (!req.query.query) {
        return res.status(400).json("Error: Missing query");
    }
    //build query url
    queryUrl += "&q=" + req.query.query;
    //only add start and end dates if they exist. expecting format YYYY
    //NYT api requires date in format YYYYMMDD but our app only checks year, so we will check start dates from jan 1st, and end dates on dec 31st in order to cover entire years.
    const startDate = parseInt(req.query.startDate);
    queryUrl += (startDate && (startDate >= 1852 && startDate <= 3000)) ? "&begin_date=" + req.query.startDate + "0101" : "";
    const endDate = parseInt(req.query.endDate)
    queryUrl += (endDate && (endDate >= 1852 && endDate <= 3000)) ? "&end_date=" + req.query.endDate + "1231" : "";
    console.log(queryUrl);

    //make axios call
    axios.get(queryUrl)
        .then(function (response) {
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.error(error);
            res.status(400).json({ Name: error.name, Message: error.message })
        });

});
module.exports = router;
