import Button from "./ts/model/Button";
import Input from "./ts/model/Input";
import RunContextMap from "./ts/RunContextMap";

const contextMap: RunContextMap = RunContextMap.instance;

contextMap.add(Button.name, new Button())
contextMap.add(Input.name, new Input())