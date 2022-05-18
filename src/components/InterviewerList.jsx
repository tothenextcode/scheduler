import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  const interviewerListItems = props.interviewers.map(interviewer => 
    <InterviewerListItem 
      key={interviewer.id}
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      setInterviewer={props.setInterviewer}
      selected={props.interviewer===interviewer.id}
    />
  );

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerListItems}
      </ul>
    </section>
  );
};