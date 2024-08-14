import "./App.css";
const style = {
  color:"white",
backgroundColor:"purple",
textAlign:"center",
padding:"20px",
borderRadius:"6px",
marginBottom:"30px",
};
function Greeting(props) {
    const { name, city, age } = props;
    return (
      <div className="card">
        <h1> I am {name} from {city}. I am {age} years old.    </h1>
      </div>
    );}
  function GreetingHi() {
    return (
      <div style={style}> Hiiie    </div> 
     )  }
  function GreetingBye()
  {  return (
      <div>
      <h1 style={{color: "red",textAlign:"center" }}>Bbyeee.....</h1>
      </div>
    );  }
export
{ Greeting, GreetingBye, GreetingHi};
