const {Router} = require ("express");
const { getAllNotes, createNotes,formCreateNewNote , formUpdateNote,updateNote, delteNote} = require("../src/controllers/notes.controllers");
const router = Router ();

router.get('/', getAllNotes)
router.get('/create', formCreateNewNote)
router.post('/' , createNotes)
router.get('/update/:id', formUpdateNote)
router.post('/update',updateNote)
router.get('/delete/:id', delteNote)

module.exports = router;