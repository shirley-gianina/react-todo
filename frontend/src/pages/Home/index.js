import React, { Component } from "react"

import "./style.css"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            todos: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault()

        if (this.state.value.length > 0) {

            this.setState({
                todos: [
                    ...this.state.todos,
                    this.state.value
                ],
                value: ''
            })
        }

    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    onDelete(i) {
        console.log(i, this.state)

        this.setState({
            todos: this.state.todos.filter((item, index) => {
                return index !== i
            })
        })

    }

    render() {
        return (
            <div className="container">
                <div className="card mt-5">
                    <div className="card-header">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group">
                                <input type="text" value={this.state.value} onChange={this.handleChange} name="todo" className="form-control" placeholder="Write text here.."/>
                                <button className="btn btn-outline-primary fs-3 d-flex justify-content-center align-items-center" type="submit" id="button-addon2">
                                    <ion-icon name="add-circle-outline"></ion-icon>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                this.state.todos.map((todo, i) => {
                                    return (
                                        <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                                            {todo}
                                            <span onClick={(e) => this.onDelete(i)} className="badge bg-danger fs-4 d-flex h-100 justify-content-center align-items-center">
                                                <ion-icon name="trash-outline"></ion-icon>
                                            </span>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;