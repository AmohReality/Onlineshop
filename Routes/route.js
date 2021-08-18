const express = require('express');

const router = express.Router();

router.get('/mm', (req, res) => {
res.status(500).send('Loading');
});


module.exports=router;