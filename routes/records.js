const express = require('express');
const router = express.Router();
const {getId, getRecords, addRecord, delRecord } = require('../controllers/recordsController');


/**
 * GET all records
 */
router.get('/', getRecords);
router.get('/:recordId', getId )

/**
* POST a record
 */
router.post('/', addRecord);

/**PUT */
// router.put('/', putRecord);
router.delete('/:recordId', delRecord);


module.exports = router;
