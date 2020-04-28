
import KeepService from '../../services/keepService.js'


export default function TextNotePreview(props) {
    const { note } = props;
    const text = note.info.txt;
    const title = note.info.title;


    function handleChange(ev) {
        const field = (ev.target.id);
        const txt = (ev.target.innerText);
        KeepService.updateNoteById(note.id, {field, txt});
    }

    return (
        <div className="note text-note flex column space-between">
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck="false" id="title" onBlur={handleChange}>{title}</h2>
            <p contentEditable suppressContentEditableWarning={true} spellCheck="false" id="txt" onBlur={handleChange}>{text}</p>

        </div>
    )
}