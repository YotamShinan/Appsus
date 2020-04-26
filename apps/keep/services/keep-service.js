export default { query };

var gNotes = null;

function query() {
    if (!gNotes) {
        gNotes = gDefaultNotes;
        return gNotes
    } else return gNotes
}


const gDefaultNotes = [{
        type: "NoteText",
        id: 101,
        isPinned: false,
        info: {
            title: "TEXT NOTE",
            txt: "so much wow"
        },
        style: {
            fontSize: 14,
            fontColor: "pink",
            background: "blue"
        }
    },
    {
        type: "NoteImg",
        id: 102,
        isPinned: false,
        info: {
            title: "IMAGE NOTE",
            url: ""
        },
        style: {
            fontSize: 14,
            fontColor: "pink",
            background: "blue"
        }
    },
    {
        type: "NoteTodos",
        id: 103,
        isPinned: true,
        info: {
            title: "TODO NOTE",
            todos: [
                { txt: "Do things", isDone: true, doneAt: null },
                { txt: "Do more", isDone: false, doneAt: 'timeStamp' },

            ]
        },
        style: {
            fontSize: 14,
            fontColor: "pink",
            background: "blue"
        }
    }
]