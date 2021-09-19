import React, {Component} from "react";


class QuizQuestionButton extends Component{
render(){
    return(
        <li><button text={this.props.button_text}></button></li>
    );
    }
}

export default QuizQuestionButton;