import utils from '../../../services/util-service.js'

export default class Note {
    constructor(type, details) {
        this.id = utils.makeId()
        this.title = ''
        this.type = type
        this.isPinned = false
        this.details = details
        this.style = {
            backgroundColor: '',
            color: 'black'
        }
    }
}