const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  //   app.get("/news", (req, res) => {
  //     console.log(req.query.q);
  //     res.render("news");
  //   });

  app.use("/news", newsRouter);
  app.use("/search", siteRouter);
  app.use("/", siteRouter);
  //   app.post("/search", (req, res) => {
  //     //phải tạo đường dẫn nếu form là phương thức post
  //     console.log(req.body);
  //     res.send("");
  //   });
}

module.exports = route;
