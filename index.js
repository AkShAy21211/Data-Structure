const user = { name: "Alice", age: 22, city: "Kannur" };

const handler = {
  get(target, prop, receiver) {
    console.log(`Accessed ${String(prop)}: ${target[prop]}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    if (prop === 'age' && typeof value !== 'number') {
      console.error(`Error: Age must be a number. Received: ${value}`);
      return false;
    }
    console.log(`Setting ${String(prop)} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  },
};

const proxyUser = new Proxy(user, handler);

// Access multiple props
console.log(proxyUser.name);
console.log(proxyUser.age);
console.log(proxyUser.city);

// Modify multiple props
proxyUser.age = 25;
proxyUser.city = "Kochi";
proxyUser.country = "India";

// Test validation
proxyUser.age = "Twenty-six"; // Should fail

// what is proxy
// proxy is a design pattern where we create a proxy object in place of the original object. The proxy object is responsible for handling all the interactions with the original object.
