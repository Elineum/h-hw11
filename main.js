const pow = (num, degree) => {
  if (
    typeof num !== "number" ||
    typeof degree !== "number" ||
    !Number.isInteger(degree) ||
    Number.isNaN(num) ||
    Number.isNaN(degree) ||
    degree < 0
  ) {
    return "Incorrect entered values";
  }

  if (num === 0) {
    return 0;
  }

  if (degree === 0) {
    return 1;
  }

  if (num === 1 || degree === 1) {
    return num;
  }

  return num * pow(num, degree - 1);
};

console.log(pow(NaN, 5));
