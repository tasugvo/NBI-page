export const StringService = {}

StringService.formatAsPhoneNumber = (numberAsString) => {
  const numbers = numberAsString.replace(/\D/g, "");
  let ddd, prefix, sufix;
  switch (numbers.length) {
    case 10:
      ddd = numbers.slice(0, 2);
      prefix = numbers.slice(2, 6);
      sufix = numbers.slice(6);
      return `(${ddd}) ${prefix}-${sufix}`;
    case 11:
      ddd = numbers.slice(0, 2);
      prefix = numbers.slice(2, 7);
      sufix = numbers.slice(7);
      return `(${ddd}) ${prefix}-${sufix}`;
    case 12:
      ddd = numbers.slice(2, 4);
      prefix = numbers.slice(4, 8);
      sufix = numbers.slice(8);
      return `(${ddd}) ${prefix}-${sufix}`;
    case 13:
      ddd = numbers.slice(2, 4);
      prefix = numbers.slice(4, 9);
      sufix = numbers.slice(9);
      return `(${ddd}) ${prefix}-${sufix}`;
    default:
      return "Número Inválido"
  }
}