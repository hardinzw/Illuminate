var express = require('express');
var router = express.Router();
let Issue = require('../controllers/IssueController');

/*  "/api/issues"
 *    GET: finds all issues
 *    POST: creates a new user
 */
router.route('/issues')

    /**
     * Creates a new issue
     *
     * HTTP POST http://localhost:3000/api/issues
     * @return list of users in JSON format
     */
    .post(function (req, res) {
        Issue.store(req, res);
    })

    /**
     * find all the issues
     *
     * HTTP GET http://localhost:3000/api/issues
     * @return list of users in JSON format
     */
    .get(function (req, res) {
       Issue.findAll(req, res);
    });


/*  "/api/issues/:id"
 *    GET: find issue by id
 *    PUT: update issue by id
 *    DELETE: deletes issue by id
 */
router.route('/issues/:id')

    /**
     * Find the issue with that id
     *
     * HTTP GET http://localhost:3000/api/issues/:id
     * @return list of users in JSON format
     */
    .get(function (req, res) {
        Issue.findById(req, res);
    })

    /**
     * Update the issue with that id
     *
     * HTTP PUT http://localhost:3000/api/issues/:id
     * @return list of users in JSON format
     */
    .put(function (req, res) {
       Issue.update(req, res);
    })

    /**
     * Delete the issue with that id
     *
     * HTTP DELETE http://localhost:3000/api/issues/:id
     * @return list of users in JSON format
     */
    .delete(function (req, res) {
       Issue.delete(req, res);
    });

module.exports = router;