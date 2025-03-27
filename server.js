const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("recipes.json"); // مسیر فایل db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  if (req.method === "GET" && req.url.startsWith("/recipes")) {
    // تعداد کل رکوردها را محاسبه کنید
    const totalCount = router.db.get("recipes").size().value();
    res.set("x-total-count", totalCount);
  }
  next();
});

server.use(router);

server.listen(5000, () => {
  console.log("JSON Server is running on http://localhost:5000");
});
