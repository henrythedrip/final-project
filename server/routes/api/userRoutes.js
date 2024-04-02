const router = require('express').Router();

// this is a smoke test that can be deleted later
router.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = router