export type MemberType = {
    email: string
    name: string
    newMessage: {}
    picture: string
    status: string
    __v: number
    _id: string
}

//MessagesType
type MessageFrom = {
    email: string
    name: string
    picture: string
    status: string
    __v: number
    _id: string
}
type MessageByDate = {
    content: string
    date: string
    time: string
    from: MessageFrom
    to: string
    __v: number
    _id: string
}

export type MessageType = {
    _id: string
    messagesByDate: MessageByDate[]
}
export type PrivateMsg = {
    email: string
    name: string
    newMessage: {}
    picture: string
    status: string
    __v: number
    _id: string
}
