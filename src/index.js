import { createRoot } from "react-dom/client";
import { Greeting , GreetingBye ,Hlw} from "./App";

const root=createRoot(document.getElementById("root"));

root.render(
    <>
     <Greeting name="Mansi" city="SInnar" age="21" />
    <GreetingBye name="Mansi"/>
    <Hlw/>
    </>
)