export interface IMessage {
    id: number
    user_id: number
    body: string
}

export interface ServerResponse<T> {
    username: string
    user_id: number
    messages: T[]
}