import { store } from "../redux/store";

export function getValueByIndex(array, indexes) {
  try {
    // If indexes is a single number, convert it to a string
    if (typeof indexes === "number") {
      indexes = indexes.toString();
    }

    // If indexes is a string, split it by comma and trim whitespaces
    if (typeof indexes === "string") {
      indexes = indexes.split(",").map((index) => index.trim());
    }

    // Array to store labels
    let labels = [];

    // If only one index is provided, add its label to the array
    if (indexes.length === 1) {
      const index = parseInt(indexes[0]);
      if (!isNaN(index) && index >= 0 && index < array.length) {
        labels.push(array[index].label);
      }
    } else {
      // If multiple indexes are provided, add labels for each index to the array
      indexes.forEach((index) => {
        const parsedIndex = parseInt(index);
        if (
          !isNaN(parsedIndex) &&
          parsedIndex >= 0 &&
          parsedIndex < array.length
        ) {
          labels.push(array[parsedIndex].label);
        }
      });
    }

    // Join the labels with commas and return as a single string
    return labels.join(", ");
  } catch (error) {
    // If any error occurs during execution, return null
    return null;
  }
}

export function replaceSeparator(inputString) {
  // Check if inputString is not provided or undefined
  if (typeof inputString !== "string" || inputString === undefined) {
    return "None";
  }

  // Split the input string by commas
  const array = inputString.split(",");

  // Join the array elements with the new separator
  const resultString = array.join(" / ");

  return resultString;
}

export function displayErrors(errors, message) {
  const displayedMessages = new Set();
  const displayNestedErrors = (errorObj, prefix = "") => {
    if (typeof errorObj === "object") {
      if (errorObj.errors) {
        Object.entries(errorObj.errors).forEach(
          ([fieldName, errorMessages]) => {
            errorMessages.forEach((errorMessage) => {
              const messageKey = `${fieldName}: ${errorMessage}`;
              if (!displayedMessages.has(messageKey)) {
                message.error(messageKey);
                displayedMessages.add(messageKey);
              }
            });
          },
        );
      } else {
        Object.entries(errorObj).forEach(([key, value]) => {
          displayNestedErrors(value, `${prefix}${key}.`);
        });
      }
    } else {
      console.error("Invalid errors object provided.");
    }
  };

  displayNestedErrors(errors);
}

export function convertToArray(input) {
  // Check if input is not empty
  if (input == null) {
    return [];
  }
  if (input.trim() == "") {
    return [];
  }

  // Check if input is a single number
  if (!input.includes(",")) {
    const number = parseFloat(input.trim());
    return isNaN(number) ? null : number;
  }

  // Split the input string by commas
  const parts = input.split(",");

  // Convert each part to a number
  const result = parts.map((part) => {
    const number = parseFloat(part.trim());
    return isNaN(number) ? null : number;
  });

  return result;
}

export function processInput(data) {
  try {
    // Convert to string and split by comma, then map to numbers after trimming
    let result = data
      .toString()
      .split(",")
      .map((option) => parseInt(option.trim()));
    return result;
  } catch (error) {
    return null; // Return null if any error occurs
  }
}

export const getUserRole = () => {
  const role = store.getState().auth?.auth?.role;
  return role;
};

export default function isRejected(obj) {
  if (!obj) {
    return false;
  }

  if (typeof obj === "string") {
    let matches = obj.match(/(\/|^)(rejected)$/);
    if (matches && matches.length >= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (obj.error && obj.error.type) {
    return isRejected(obj.error.type);
  }

  if (obj.type) {
    return isRejected(obj.type);
  }

  // If none of the conditions match, recursively search deeper into nested objects
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      if (isRejected(obj[key])) {
        return true;
      }
    }
  }

  return false;
}
