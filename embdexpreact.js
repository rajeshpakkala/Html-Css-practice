const fullname=user=>user.firstname+" "+user.lastname;
const user={firstname:"rajeshhh",lastname:"pakkalaaaaa"};
const element=<h1 className="greet">HELLO,{fullname(user)}!</h1>;
ReactDOM.render(element,document.getElementById("root"));