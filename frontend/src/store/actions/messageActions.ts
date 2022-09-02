import { AppDispatch } from '..'
import axios from '../../axios/index'
import { ServerResponse, IMessage } from '../../models/models'

export const fetchMessages = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response =  await axios.get<ServerResponse<IMessage>>('messages')
            console.log(response.data.messages[0].body)
        } catch (e) {

        }
    }
}

export const addMessage = (message: IMessage) => {
    return async (dispatch: AppDispatch) => {
        try {
            
        } catch (e) {

        }
    }
}