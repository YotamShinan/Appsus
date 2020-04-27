import EmailPreview from './EmailPreview.jsx'



export function EmailList(props) {
    // console.log(props)
    return (
            <ul className="emails-table clean-list">
                { props.emails.map( (email, idx) => 
                <EmailPreview key={ idx } email = {email} /> )}
            </ul>      
            )
}
