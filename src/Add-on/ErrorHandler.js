import React, { Component } from "react";

class ErrorHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ErrorState: false,
        }
    }

    componentDidCatch() {
        this.setState({ ErrorState: true })
    }

    render() {
        return this.state.ErrorState ?
            <h1 style={{
                fontFamily: "'customFont', sans-serif",
                fontWeight: "lighter",
            }}>Something's OFF!!</h1>
            :(
                this.props.children
            );
    }
}

export default ErrorHandler;