const express = require('express');
const router = express.Router();
// pg boilet plate is moved into modefule
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "checklist"';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "checklist" ("item") VALUES ($1);'
    pool.query(queryText, [req.body.item])
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    let { id } = req.params;
    const sqlText = `DELETE FROM "checklist" WHERE "id" = $1;`;
    pool.query(sqlText, [id])
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.sendStatus(204);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
});

module.exports = router;