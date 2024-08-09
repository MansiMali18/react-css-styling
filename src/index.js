import { createRoot } from "react-dom/client";

const root=createRoot(document.getElementById("root"));
import { Sayhello, GreetingBye , Hlw } from "./App";
root.rendor(
    <>
    <Sayhello/>
    <GreetingBye/>
    <Hlw/>
    </>
)