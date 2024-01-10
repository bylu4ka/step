const value = prompt("Введіть значення :")
const numberValue = !isNaN(value)
console.log(` Чи воно число ${numberValue}`);
const stringValue = isNaN(value)
console.log(` Чи воно рядок ${stringValue}`);
