const router = require('express').Router();

/* ===========================
        /api
=========================== */
router
  .get('/', (req, res) => res.status(200).json('Fetch from the API...'))
  .post('/', (req, res) => res.status(200).json('Post to the API...'));

module.exports = router;
