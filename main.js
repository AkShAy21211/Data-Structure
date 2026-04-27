const obj = {
  name: 'my-package',
  version: '1.0.0',
  description: 'A sample Node.js package',
}
Object.seal(obj)
Object.freeze(obj)
Object.preventExtensions(obj)
Object.isSealed(obj) // true
Object.isFrozen(obj) // true
Object.isExtensible(obj) // false
console.log(obj)
obj.name = 'updated-package'
obj.version = '1.1.0'

obj.license = 'MIT'
console.log(obj)

// explain all the methods used above

/*
1. Object.seal(obj): This method seals the object, preventing new properties from being added and marking all existing properties as non-configurable. However, the values of existing properties can still be changed.
2. Object.freeze(obj): This method freezes the object, making it immutable. It prevents new properties from being added, existing properties from being removed, and existing properties from being modified.
3. Object.preventExtensions(obj): This method prevents the addition of new properties to the object. Existing properties can still be modified or deleted.
4. Object.isSealed(obj): This method checks if the object is sealed. It returns true if the object is sealed, otherwise false.
5. Object.isFrozen(obj): This method checks if the object is frozen. It returns true if the object is frozen, otherwise   false.
6. Object.isExtensible(obj): This method checks if the object is extensible. It returns true if the object is extensible, otherwise false
*/