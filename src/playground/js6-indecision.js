console.log("app.js is running")
var app={
    title:"React course",
    subtitle:"Udemey",
    options:[]
}
//if statements 
//ternary operators
//logical and operator
//jsx=javascript xml
const onFormSubmit=(e)=>
{
e.preventDefault();
const option=e.target.elements.option.value;
if(option)
{
    app.options.push(option);
    e.target.elements.option.value="";
    reactRenderFunction();

}
//create "Remove all button above list"
//on click swipe the array
//console.log("form submitted");
};
const reset1=()=>
{
    app.options=[];
    reactRenderFunction();



}
const onMadeDecision=()=>
{
    const randomNum=Math.floor(Math.random()*app.options.length);
    const option=app.options[randomNum];
    alert(option);

    console.log(randomNum)
}
const template=(
<div>
<h1>{app.title}</h1>
{app.subtitle &&<p>{app.subtitle}</p>}
<p>{app.options.length>0?"here are your options":"no options"}</p>
<p>{app.options.length}</p>
{
    [<p key="1">a</p>,<p key="2">b</p>,<p key="3">c</p>]
}
{99}{98}{97}
<ol>
<li>banana</li>
<li>apple</li>
<li>orange</li>
</ol>
<form onSubmit={onFormSubmit}>
<input type="text" name="option"></input>
<button>Add option</button>
<br></br>
<button onClick={reset1}>Remove all</button>
</form>
</div>
);
//create a template  var jsx expressions
//div 
//only render subtitle (and p tag) if subtitle exists -logical an doperator
//
const user={
    name:"rajinikanth",
    age:26,
    location:"hyderabad"
};
const getLocation=(location)=>
{
    if(location)
    {
        return <p>Location:{location}</p>;
    }
}
//cretae app object title and subtitle
// use title and subtitle 
//render template
//logical operators

const template1=(<div><h1>{user.name?user.name:"srikanth"}</h1>
    {true}
    {(user.age && user.age>=18) && <p>Age:{user.age}</p>}
    {/*<p>Location:{getLocation(user.location)}</p> */}
    {getLocation(user.location)}
    </div>)
const appRoute=document.getElementById("app");
ReactDOM.render(template,appRoute);
const numbers=[99,101,200];
const reactRenderFunction=()=>
{
    const template=(
        <div>
        <h1>{app.title}</h1>
        {app.subtitle &&<p>{app.subtitle}</p>}
        <p>{app.options.length>0?"here are your options":"no options"}</p>
        <button  disabled={app.options.length==0} onClick={onMadeDecision}>What should I do</button>
        <ol>
        {/* */}
        {app.options.map((element)=>
            {
                return <li key={element}>{element}</li>
            })}
        </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add option</button>
        <br></br>
        <button  onClick={reset1}>Remove all</button>
        </form>
        </div>
        );
        ReactDOM.render(template,appRoute);

}
reactRenderFunction();
//create react render function that renders the new jsx
//call it right away
//call it after options array added to 
