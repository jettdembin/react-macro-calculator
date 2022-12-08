import React from "react";

const GoalBtn = (props) => {
  return (
    <div className="flex justify-center">
      <button
        className="px-4 py-2 border border-emerald-300"
        onClick={() => {
          props.toggleGoal(props.id);
          props.updateCal(props.id);
          props.updateAll(
            Math.round((props.calories * (Number(props.percentCarb) / 10)) / 4),
            Math.round(
              (props.calories * (Number(props.percentProtein) / 10)) / 4
            ),
            Math.round((props.calories * (Number(props.percentFat) / 10)) / 9),
            Number(props.percentCarb) * 10,
            Number(props.percentProtein) * 10,
            Number(props.percentFat) * 10
          );
          if (props.firstAdjustment === true) {
            props.toggleIsFirstAdjustment();
            props.toggleIsAdjusted();
          }
        }}
      >
        Calculate
      </button>
    </div>
  );
};

export default GoalBtn;
