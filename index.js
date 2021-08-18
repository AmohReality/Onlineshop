const express = require('express');


Port=4001;

const app=express();

app.get('/', (req, res) => {
    res.send('Online store!!!');
});

app.listen(Port, () => {
    console.log(`Server started on port ${Port}`);
});