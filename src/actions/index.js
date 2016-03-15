const INC_ACTION = "INC_ACTION";

export const inc = (componentId) => {
  return {
    type: INC_ACTION,
    id: componentId
  }
};
