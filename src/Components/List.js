import React from "react";

class List extends React.Component{
    constructor(props) {
        super(props)

        this.createTasks = this.createTasks.bind(this)
    }

    createTasks (item) {
        return (
        <li className="list-item" key={item.toString()}>
            {/*<span className="list__num">1</span>*/}
            <div className="list__toDo" >{item}</div>
            <div>
                <button className="btn btn-edit">Edit</button>
                <button className="btn btn-delete">Delete</button>
            </div>
        </li>
        )
    }

render () {
    let listItems = this.props.createTasks.map(this.createTasks)
    return <ul>{listItems}</ul>
    }
}


export default List