import "./App.css";

function Greeting(props) {
    const { name, city, age } = props;
    return (
      <div className="card">
        <h1>
          I am {name} from {city}. I am {age} years old.
        </h1>
      </div>
    );
  }

  


  function GreetingBye(props) {
    const { name } = props;
    return (
      <div className="card">
        <h1>
        Byeee {name}.
        </h1>
      </div>
    );
  }

function Hlw()
{
    return
    (
     <div  className="card">
      <p>  How r u??????????</p>
     </div>
    );
}

export

{
    Greeting,
    GreetingBye,
    Hlw
};
