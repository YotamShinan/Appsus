import eventBus from './services/eventBusService.js'


export class UserMsg extends React.Component {
    state = {msg: null}
    
    componentDidMount() {
        this.unsubscribeFromEventBus = eventBus.on('show-msg', (msg)=>{
            const delay = 2500;
            this.setState({msg})
            setTimeout(()=>{
                this.setState({msg: null})
            }, delay)
        })
    }
    render() {
        const {msg} = this.state
        return (!msg)? '' : <section className="user-msg">
            <button onClick={()=>{
                this.setState({msg: null})
            }}>x</button>
            {msg.txt}
        </section>
    }
}