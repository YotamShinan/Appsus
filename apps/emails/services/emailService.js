import util from '../../../services/util-service.js'

export default {
    query,
    getById,
    remove,
    toggleStar,
    toggleRead,
    toggleTrash,
    createEmail
}

function query(filter){
    if (filter === 'inbox') return getInbox();
    if (filter === 'trash') return getTrash();
    if (filter === 'starred') return getStarred();
    return gEmails;
}

const gEmails = [{id: '1', subject: 'Wassap?', body: 'Pick up!',
                 isRead: true, sentAt : 1551133930594, sender: 'Dan', 
                 senderAddress:'address@gmail.com', isStarred: true, isTrash: true},
                 {id: '2', subject: 'manshma?', body: 'hello there!', 
                 isRead: false, sentAt : 1551133930594, sender: 'Dan', 
                 senderAddress:'my@gmail.com', isStarred: false, isTrash: false}]

function getTrash(){
    const result = gEmails.filter(email => email.isTrash);
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
    gEmails.push(newMail);
}

createEmail('New Email', 'Done at createEmail', 'stam@stam.com')