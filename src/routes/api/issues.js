const router = require("express").Router();
const issuesController = require("../../controllers/issuesController");

router.route("/")
  .get(issuesController.findAll)
  .post(issuesController.create);

router
  .route("/:id")
  .get(issuesController.findById)
  .put(issuesController.update)
  .delete(issuesController.remove);

module.exports = router;