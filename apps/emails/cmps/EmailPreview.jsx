const { Link } = ReactRouterDOM

export default function EmailPreview(props) {
    const { email } = props
        return (
            <Link to={`/emails/${email.id}`} >
                <li className={`${(!email.isRead) ? "unread-email": "read-email"} flex space-between`}>
                    <div>{email.sender}</div>
                    <div>{email.subject }</div>
                    <div>{new Date(email.sentAt).toDateString()}</div>
                </li>
            </Link>
           
        )

}
