const transformValue = (obj) => {
  // Write your solution here. You can create any number of helper functions
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      return obj.map(transformValue);
    } else {
      const newObj = {};
      for (const key in obj) {
        newObj[key] = transformValue(obj[key]);
      }
      return newObj;
    }
  } else if (typeof obj === "string") {
    return (obj += " AI");
  } else if (typeof obj === "number") {
    return (obj += 1);
  }
};
