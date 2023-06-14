class NewsController {
  //[GET] /news
  index(req, res) {
    console.log(req.query.q);
    res.render("news");
  }
  //[GET] /news/:slug
  show(req, res) {
    console.log(req.query.q);
    res.send("news detail");
  }
}
module.exports = new NewsController();
