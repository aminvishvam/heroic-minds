import React from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import "./Questionarries.css";
import "survey-react/survey.css";

class Questionarries extends React.Component {
  constructor(props) {
      super(props);
      this.onCompleteComponent = this.onCompleteComponent.bind(this);
    this.state = { isCompleted: false };
  }
  onCompleteComponent() {
    this.setState({ isCompleted: true });
  }
  render() {
    let json = {
        firstPageIsStarted: true,
        showProgressBar: "bottom",
        showNavigationButtons: true,
        showProgressBar: "bottom",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start the Questionarries.<br/>Please click on <b>'Start'</b> button when you are ready."
                },
            ]
        },
        {
            questions: [
                {
                  type: "radiogroup",
                  name: "qu1",
                  title: "Do you prefer Fiction, Non-Fiction or Both?",
                  isRequired: true,
                  choices: [
                    "Fiction",
                    "Non-Fiction",
                    "Both"
                  ]
                },
            ]
        },
        {
            questions: [
              {
                  type: "checkbox",
                  name: "qu2",
                  title: "What themes are you interested in?",
                  isRequired: true,
                  choices: [
                    "Love",
                    "Perseverence",
                    "Failure",
                    "Loss",
                    "Fear"
                  ]
                }
            ]
        },
        {
            questions: [
              {
                  type: "checkbox",
                  name: "qu3",
                  title: "What themes are you interested in?",
                  isRequired: true,
                  choices: [
                    "Greek Mythology",
                    "Fiction Literature",
                    "Sports",
                    "Medieval Tales",
                    "Real Life Stories",
                    "Poor Culture"
                  ]
                }
            ]
        },
        {
            questions: [
              {
                  type: "checkbox",
                  name: "qu1",
                  title: "What are you facing challenges with today?",
                  isRequired: true,
                  choices: [
                    "Lonelines4",
                    "Frustration",
                    "Goal-setting",
                    "Sadness",
                    "Confidence",
                    "Happiness",
                    "Fulfillment",
                    "Purpose",
                    "Excitement"
                  ]
                }
            ]
        },
    ]
    };
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={true}
        onComplete={this.onCompleteComponent}
      />
    ) : null;
    var onCompleteComponent = this.state.isCompleted ? (
      <div>The component after onComplete event</div>
    ) : null;
    return (
      <div>
        {surveyRender}
        {onCompleteComponent}
      </div>
    );
  }
}

export default Questionarries