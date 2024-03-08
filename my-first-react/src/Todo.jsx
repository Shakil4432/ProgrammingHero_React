function Todo({task,isDone}){
    if(isDone){
        return <h1>
            {task}
        </h1>
    }
    return <h1>
        {isDone}
    </h1>
}
export default Todo