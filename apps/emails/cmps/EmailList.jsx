import EmailPreview from './EmailPreview.jsx'



export function EmailList(props) {
    // console.log(props)
    return (
        <React.Fragment>
            <div className="emails-inner-container flex column">
                <button>Sort by date</button>
                
                <ul className="emails-table clean-list">
                    { props.emails.map( (email, idx) => 
                    <EmailPreview key={ idx } email = {email} /> )}
                </ul>  
            </div>
        </React.Fragment>    
            )
}
