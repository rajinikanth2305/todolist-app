var options=["i am fyne because I am doing well and u are the most beautiful person"];
let visibility=false;
const toggleVisibilty=()=>
{
    visibility=!visibility
    reactRender();
}
const hideOptions=()=>
{
    count=1;
    reactRender();
}
const reactRender=()=>
{
    const template=(
        <div>
        <h1>Visibilty options</h1>
        <button onClick={toggleVisibilty}>
        {visibility?"Hide details":"Show details"}
        </button>
        {visibility && <p>Hello i am here</p>}
        </div>
    )
    ReactDOM.render(template,document.getElementById("app"));
    
}
reactRender();

class VisibilityToggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.state=
        {
            visibility:false,
            text:"hello i am fyne"
        }
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
    }
    handleToggleVisibility()
    {
        this.setState(
            {
                visibility:!this.state.visibility
            }
        )

    }
    render()
    {
        return(
            <div><p>Hello i am fyne</p>
            <button onClick={this.handleToggleVisibility}>Submit</button>
            {this.state.visibility?<p>"Hello"</p>:<p>"Fyne"</p>}
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle/>,document.getElementById("app"));
