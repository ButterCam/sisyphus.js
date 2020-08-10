import reflectionJson from "./reflection.json"
import {Root} from "protobufjs"

export let root = Root.fromJSON(reflectionJson)
root.resolveAll()
