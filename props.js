const Welcome=(props)=>{
    const {name,greeting}=props;
    return(
        <h1 className="greeting">{name},{greeting}!</h1>

    );
};
const Greetings=()=>(
    <div>
    <Welcome name="rajesh" greeting="hello"/>
    <Welcome name="sneha" greeting="hai"/>
    <Welcome name="Varma" greeting="hello"/>
    <Welcome name="brahmi" greeting="hai"/>
    </div>
)
ReactDOM.render(
  <Greetings/>,document.getElementById("root"));