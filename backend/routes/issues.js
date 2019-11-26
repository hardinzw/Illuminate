const router = require('express').Router();
let Issue = require('../models/Issue');

router.route('/').get((req, res) => {
    Issue.find()
      .then(issues => res.json(issues))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const project = req.body.project;
  const subject = req.body.subject;
  const severity = req.body.severity;
  const status = req.body.status;
  const date = Date.parse(req.body.date);

  const newIssue = new Issue({
    username,
    project,
    subject,
    severity,
    status,
    date,
  });
  newIssue.save()
    .then(() => res.json('Issue added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Issue.findById(req.params.id)
    .then(issue => res.json(issue))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Issue.findByIdAndDelete(req.params.id)
    .then(() => res.json('Issue deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Issue.findById(req.params.id)
    .then(issue => {
      issue.username = req.body.username;
      issue.project = req.body.project;
      issue.subject = req.body.subject;
      issue.severity = req.body.severity;
      issue.status = req.body.status;
      issue.date = Date.parse(req.body.date);

      issue.save()
        .then(() => res.json('Issue updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;