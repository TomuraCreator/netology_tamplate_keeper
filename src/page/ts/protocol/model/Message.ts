import { Scope } from "../../enums/Scope"

export type Message = {
    data?: Data,
    method?: string,
    result?: boolean
}

type Data = {
    email: string,
    taskName?: string,
    scope?: Scope
}