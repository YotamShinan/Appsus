import KeepService from '../../services/keepService.js'

export default function TodoNotePreview(props) {
    const { note } = props;
    const title = note.info.title;
    const todos = note.info.todos;

    function handleChange(ev) {
        const field = (ev.target.id);
        const txt = (ev.target.innerText);
        KeepService.updateNoteById(note.id, {field, txt});
    }

    return (
        <div className="note todo-note flex column space-between">
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck="false" id="title" onBlur={handleChange}>{title}</h2>
            <ul className="clean-list">
                {todos.map((todo, idx) => <li key={idx}><p>{todo.txt} - Created At: {todo.doneAt}</p></li>)}
            </ul>

        </div>
    )
}

