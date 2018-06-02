const activitiesReducer = (state = {}, activity) => {
  switch (activity.type) {
    case 'ADD_ACTIVITIES':
      return activity.activities;
    default:
      return state;
  }
}

export default activitiesReducer