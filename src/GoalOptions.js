import React from "react";
import GoalBtn from "./GoalBtn";

function GoalOptions(props) {
  return (
    <section className="Goal-cntr">
      <div className="Goal-wrapper">
        <div className="Goal">
          <h4>Cut</h4>
          <GoalBtn
            id="12"
            weight={props.weight}
            calories={props.calories}
            updateCal={props.updateCal}
          />
        </div>
      </div>
      <div className="Goal-wrapper">
        <div className="Goal">
          <h4>Maintain</h4>
          <GoalBtn
            id="15"
            weight={props.weight}
            calories={props.calories}
            updateCal={props.updateCal}
          />
        </div>
      </div>
      <div className="Goal-wrapper">
        <div className="Goal">
          <h4>Bulk</h4>
          <GoalBtn
            id="18"
            weight={props.weight}
            calories={props.calories}
            updateCal={props.updateCal}
          />
        </div>
      </div>
    </section>
  );
}

export default GoalOptions;
