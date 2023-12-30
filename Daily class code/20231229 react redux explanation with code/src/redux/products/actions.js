export const pepsiBoy = (type, coldDrink) => {
  console.log("in actions", type, coldDrink);
  // type, data
  return {
    type: type,
    value: coldDrink,
  };
};

export const cokeBoy = (label, coldDrink) => {
  return {
    type: label,
    value: coldDrink,
  };
};
