export default {
    query
}

function query(){
    return gEmails;
}
const gEmails = [{id: 1, subject: 'Wassap?', body: 'Pick up!', isRead: true, sentAt : 1551133930594, user: 'Dan'},
                 {id: 2, subject: 'manshma?', body: 'hello there!', isRead: false, sentAt : 1551133930594, user: 'Dan'}]