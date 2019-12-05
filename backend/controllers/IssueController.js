const Issue = require('../models/Issue');

/**
 * Find all the issues
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.findAll = function (req, res) {
    Issue.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

/**
 * Store new issue
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.store = function (req, res) {
    var newIssue = new User(req.body);
    newIssue.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

/**
 * Find the issue by id
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.findById = function (req, res) {
    Issue.findById(req.params.id, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

/**
 * Update the issue by id
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.update = function (req, res) {
    Issue.findOneAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

/**
 * Delete the user by id
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.delete = function (req, res) {
    Issue.remove({
        _id: req.params.id
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({message: 'Issue successfully deleted'});
    });
};