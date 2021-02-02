var express = require("express");
var router = express.Router();
const user = require("../controllers/user");
const event = require("../controllers/event");
const ticket = require("../controllers/ticket");
const order = require("../controllers/order");
const auth = require("../middleware/auth");
const uplaod = require("../middleware/upload");
const payment = require("../controllers/payment");

/* payment. */
router.post("/pay", payment.start);
router.post("/verify-payment", payment.verify);

//user routes
router.post("/signup", auth.register);
router.post("/login", auth.login);
router.get("/user/:id", auth.jwt, user.getUser);
router.get("users", auth.jwt, user.getAllUsers);
router.patch("/user", auth.jwt, user.updateUser);
router.delete("/user", auth.jwt, user.deleteUser);

//event routes
router.post("/event", auth.jwt, uplaod.single("image"), event.create);
router.get("/events", event.getAll);
router.get("/event/:id", event.get);
router.get("/events/:id", auth.jwt, event.getUserEvents);
router.patch("/event/:id", auth.jwt, uplaod.single("image"), event.update);
router.put("/publish/:id", auth.jwt, event.togglePublish);
router.put("/complete/:id", auth.jwt, event.toggleComplete);
router.delete("/event/:id", auth.jwt, event.delete);

//ticket routes
router.post("/order", auth.jwt, order.create);
router.get("/orders", auth.jwt, order.getAll);
router.get("/order", auth.jwt, order.get);
router.patch("/order", auth.jwt, order.update);
router.get("/order-count/:id", order.count);
router.delete("/order", auth.jwt, ticket.delete);

//ticket routes
router.post("/ticket", auth.jwt, uplaod.single("image"), ticket.create);
router.get("/tickets", auth.jwt, ticket.getAll);
router.get("/ticket", auth.jwt, ticket.get);
router.patch("/ticket", auth.jwt, ticket.update);

router.delete("/ticket", auth.jwt, ticket.delete);

module.exports = router;
