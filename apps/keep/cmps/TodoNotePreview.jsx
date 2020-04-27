export default function TodoNotePreview(props) {
    const { note } = props;
    const title = note.info.title;
    const todos = note.info.todos;

    return (
        <div className="note todo-note className">
            <h2>{title}</h2>
            <ul className="clean-list">
                {todos.map((todo, idx) => <li key={idx}><p>{todo.txt} - Created At: {todo.doneAt}</p></li>)}
            </ul>
            <ul className="note-tools flex space-between clean-list">
                <li><i className="fas fa-map-pin"></i></li>
                <li><i className="fas fa-palette"></i></li>
                <li><i className="fas fa-font"></i></li>
                <li><i className="fas fa-trash-alt"></i></li>
            </ul>

        </div>
    )
}

