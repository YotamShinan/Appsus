export default function TodoCmp(props) {
    const { note } = props;
    const title = note.info.title;
    const todos = note.info.todos;

    return (
        <div className="note todo-note">
            <h2>{title}</h2>
            <ul className="clean-list">
                {todos.map((todo, idx) => <li key={idx}><p>{todo.txt} - Created At: {todo.doneAt}</p></li>)}
            </ul>
        </div>
    )
}

