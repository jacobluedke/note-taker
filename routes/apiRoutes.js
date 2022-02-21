const router = require('express').Router();
const db = require('../db/db');

router.get('/notes', (req, res) => {
    db.getNotes()
    .then((notes) => {
        return res.json(notes);
    })
});

router.post('/notes', (req, res) => {
    db.addNote(req.body)
    .then((note) => res.json(note))
    
});

router.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id)
    .then(() => res.json({ok: true}))
})

module.exports = router;