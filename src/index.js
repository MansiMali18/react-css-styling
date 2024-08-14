import { createRoot } from "react-dom/client";
import { Greeting, GreetingBye, GreetingHi} from "./App";

const root=createRoot(document.getElementById("root"));

root.render(
    <>
    <GreetingHi/>
     <Greeting name="Mansi" city="Sinnar" age="21" />
     <GreetingBye/>
    </>
)