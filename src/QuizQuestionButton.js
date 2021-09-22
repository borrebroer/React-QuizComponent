import React, {Component} from "react";


class QuizQuestionButton extends Component{
    render(){
        return(
            <li><button onClick={this.handleClick.bind(this)} text={this.props.button_text}></button></li>
        );
    }

    handleClick(){
        this.props.clickHandler(button_text);
    }
}

export default QuizQuestionButton;