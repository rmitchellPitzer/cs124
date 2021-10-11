import { uuid } from 'uuidv4';

const initialState = {
    tasks: []

}

function createTask(id) {
    return {
        text: "",
        isCompleted: false,
        id
    }
}

export default function toDoReducer(state = initialState, action){
    switch (action.type){
        case 'createTask':{
            var id = uuid()
            createTask(id)
            return {
                task: state.task.push.
            }
        }
    }
}