import KeepService from '../../services/keepService.js'

export default function VideoNotePreview(props) {
    const { note } = props;
    const title = note.info.title;
    const url = note.info.url;

    function handleChange(ev) {
        const field = (ev.target.id);
        const txt = (ev.target.innerText);
        KeepService.updateNoteById(note.id, {field, txt});
    }

    function getIdfromYoutubeUrl(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }

    const videoSrc = `https://www.youtube.com/embed/${getIdfromYoutubeUrl(url)}`

    return (
        <div className="note vidoe-note flex column space-between">
            <iframe width="320" height="315" title="video" src={videoSrc}></iframe>
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck="false" id="title" onBlur={handleChange}>{title}</h2>
        </div>
    )
}








