import utils from '../../../services/utileService.js'
import Note from './noteModel.js'
import storageService from '../../../services/storageService.js'

export default {
    query,
    addNote,
    loadNotes,
    saveNotes,

};

var gNotes = null;

function query() {
    if (!gNotes) {
        loadNotes()
    }
    return gNotes
}


function addNote(type, info /*isDraft = false*/ ) {
    console.log('addNote at Services');
    loadNotes()
    gNotes = JSON.parse(JSON.stringify(gNotes))
    const newNote = new Note(type, info)
    gNotes.push(newNote)
    saveNotes()
    return Promise.resolve(newNote)
}

function loadNotes() {
    gNotes = storageService.loadFromStorage('notes', null)
    if (!gNotes || !gNotes.length) createTestNotes()
}

function saveNotes() {
    storageService.saveToStorage('notes', gNotes)
}


function createTestNotes() {
    gNotes = [{
            type: "txt",
            id: utils.makeId(),
            isPinned: false,
            info: {
                title: "TEXT NOTE",
                txt: "so much wow"
            },
            style: {
                backgroundColor: "blue",
                color: "pink",
            }
        },
        {
            type: "img",
            id: utils.makeId(),
            isPinned: false,
            info: {
                title: "IMAGE NOTE",
                url: "https://i5.walmartimages.com/asr/209bb8a0-30ab-46be-b38d-58c2feb93e4a_1.1a15fb5bcbecbadd4a45822a11bf6257.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
            },
            style: {
                backgroundColor: "blue",
                color: "pink",
            }
        },
        {
            type: "todo",
            id: utils.makeId(),
            isPinned: true,
            info: {
                title: "TODO NOTE",
                todos: [
                    { txt: "Do things", isDone: true, doneAt: null },
                    { txt: "Do more", isDone: false, doneAt: 'timeStamp' },

                ]
            },
            style: {
                backgroundColor: "blue",
                color: "pink",
            }
        }
    ];
}


// function deleteNote(noteId) {
//     let noteIdx = getNoteIdxById(noteId)
//     gNotes = JSON.parse(JSON.stringify(gNotes))
//     gNotes.splice(noteIdx, 1)
//     saveNotes()
//     return Promise.resolve(true)
// }

// function getNoteIdxById(noteId) {
//     return gNotes.findIndex(note => note.id === noteId)
// }

// function getNoteById(noteId) {
//     let foundNote = gNotes.find(note => note.id === noteId)
//     return Promise.resolve(...[foundNote])
// }

// function getNotesToRender(searchString) {

//     let filteredNotes;
//     loadNotes()

//     if (searchString) {
//         filteredNotes = searchNotes(searchString)
//         filteredNotes = sortPinned(filteredNotes)
//     } else gNotes = sortPinned(gNotes)

//     return Promise.resolve([...filteredNotes || gNotes])
// }

// function sortPinned(arrayToSort) {
//     return arrayToSort.slice().sort((note1, note2) => {
//         if (note1.isPinned && note2.isPinned) return 0
//         return note1.isPinned ? -1 : 1

//     })
// }

// function searchNotes(searchString) {
//     return gNotes.filter(note => {
//         if (note.title.toLowerCase().includes(searchString)) return true
//         if (note.type === 'txt') if (note.details.txt.toLowerCase().includes(searchString)) return true
//         if (note.type === 'todo') {
//             return note.details.todos.find(todo => todo.txt.toLowerCase().includes(searchString) !== -1)
//         }
//         return false
//     })
// }

// function updateNoteById(noteId, updates) {

//     getNoteById(noteId).then(noteToUpdate => {
//         for (let field in updates) {
//             if (updates[field].todos) noteToUpdate[field].todos = updateTodos(noteToUpdate[field].todos, updates[field].todos)
//             else if (updates.style) noteToUpdate[field] = { ...noteToUpdate[field], ...updates[field] }
//             else noteToUpdate[field] = updates[field];
//         }
//         gNotes = gNotes.map(note => (note.id === noteToUpdate.id) ? noteToUpdate : note)
//         saveNotes()
//     })
//     return Promise.resolve(true);
// }

// function updateTodos(todosToUpdate, updatedTodo) {
//     let newTodos = todosToUpdate.map(todo => (todo.id === updatedTodo.id) ? updatedTodo : todo)
//     return [...newTodos]
// }

// function togglePin(noteId) {
//     gNotes = JSON.parse(JSON.stringify(gNotes))
//     return getNoteById(noteId).then(noteToPin => {
//         noteToPin.isPinned = !noteToPin.isPinned
//         saveNotes();
//         return true;
//     })
// }

// function addTodo(noteId, todoTxt) {
//     getNoteById(noteId).then(noteToUpdate => {
//         noteToUpdate.details.todos.push({ id: getRandomId(), txt: todoTxt, isDone: false })
//         saveNotes()
//     })
//     return Promise.resolve(true)
// }