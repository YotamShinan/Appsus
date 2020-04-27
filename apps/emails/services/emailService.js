import util from '../../../services/utilService.js'

export default {
    query,
    getById,
    remove,
    toggleStar,
    toggleRead,
    toggleTrash,
    createEmail,
    numOfUnread
}

function query(filter){
    if (filter === 'inbox') return getInbox();
    if (filter === 'trash') return getTrash();
    if (filter === 'starred') return getStarred();
    if (filter === 'unread') return getUnread();
    return gEmails;
}

const gEmails = [{id: util.makeId(), subject: 'Wassap?', body: 'Pick up!',
                 isRead: true, sentAt : 1551133930594, sender: 'Dan', 
                 senderAddress:'address@gmail.com', isStarred: true, isTrash: true},
                 {id: util.makeId(), subject: 'manshma?', body: 'hello there!', 
                 isRead: false, sentAt : 1551133930594, sender: 'Dan', 
                 senderAddress:'my@gmail.com', isStarred: false, isTrash: false}]

function getTrash(){
    const result = gEmails.filter(email => email.isTrash);
    return result;
}

function getUnread(){
    const result = gEmails.filter(email => !email.isRead);
    return result;
}

function getStarred(){
    const result = gEmails.filter(email => email.isStarred);
    return result;
}

function getInbox(){
    const result = gEmails.filter(email => !email.isTrash);
    return result;
}

function getById(emailId) {
const email = gEmails.find(email => email.id === emailId)
return Promise.resolve(email);
}

function remove(emailId) {
    const emailIdx = _getIdxById(emailId)
    gEmails.splice(emailIdx, 1)
    return Promise.resolve();
}

function _getIdxById(emailId) {
    return gEmails.findIndex(email => email.id === emailId)
}

function toggleStar(emailId){
    const email = gEmails.find(email => email.id === emailId)
    email.isStarred = !email.isStarred;
    return Promise.resolve(email);
}

function toggleRead(emailId){
    const email = gEmails.find(email => email.id === emailId)
    email.isRead = !email.isRead;
    return Promise.resolve(email);
}

function toggleTrash(emailId){
    const email = gEmails.find(email => email.id === emailId)
    email.isTrash = (!email.isTrash);
    return Promise.resolve(email);
}

function createEmail(subject, body, senderAddress){
    let newMail = {
        id: util.makeId(),
        subject,
        body,
        isRead: false,
        sentAt: Date.now(),
        sender: 'Dan',
        senderAddress,
        isStarred: false,
        isTrash: false,
    }
    gEmails.unshift(newMail);
}

function numOfUnread(){
    var counter = 0;
    gEmails.forEach(email => {if (!email.isRead) counter++});
    return counter;
}

createEmail('New Email', 'Done at createEmail', 'stam@stam.com')