const Task = (props) => {
    const getPriorityColor = () => {
        switch(props.priority) {
            case "High":
                return "#ff6b6b";
            case "Medium":
                return "#ffa500";
            case "Low":
                return "#51cf66";
            default:
                return "#e0e0e0";
        }
    }
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority" style={{backgroundColor: getPriorityColor()}}>Priority: {props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task;