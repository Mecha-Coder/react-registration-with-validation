function toPascal(inputString) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
}

export default toPascal