const express = require('express');
const MemoryController = require('../controller/MemoriesController.js');
const router = express.Router();

router.get('/', MemoryController.getAllMemories);
router.post('/', MemoryController.saveMemory);
router.delete('/:id', MemoryController.deleteMemory);

module.exports = router;
