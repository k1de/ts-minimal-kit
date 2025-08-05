// Simple TypeScript application
interface Person {
  name: string;
}

function greet(person: Person): string {
  return `Hello, ${person.name}! You are welcome here...`;
}

const user: Person = {
  name: "TypeScript User",
};

console.log(greet(user));
console.log("TypeScript project is working! 🚀");
console.log("-".repeat(42))
