const names = 'Abuzar';

const greet = (strings: TemplateStringsArray, nameArg: string) => {
  return `Hello, ${nameArg}`;
};

const greeting = greet`first second ${names}`;
