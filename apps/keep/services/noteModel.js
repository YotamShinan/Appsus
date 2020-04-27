import utils from '../../../services/utilService.js'

export default class Note {
    constructor(type, info) {
        this.type = type
        this.id = utils.makeId()
        this.title = ''
        this.isPinned = false
        this.info = info
        this.style = {
            backgroundColor: '',
            color: 'black'
        }
    }
}