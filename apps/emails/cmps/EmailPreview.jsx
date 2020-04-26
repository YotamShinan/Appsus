const { Link } = ReactRouterDOM

export default function EmailPreview(props) {
    const { email } = props
        return (
            <Link to={`/emails/${email.id}`} className="email-preview">
                <li className={`${(!email.isRead) ? "unread-email": "read-email"} flex space-between`}>
                    <div>{email.user}</div>
                    <div>{email.subject }</div>
                    <div>{email.sentAt}</div>
                </li>
            </Link>
           
        )

}
