function Notes() {


    const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Mike", age: 30 },
  { name: "Sara", age: 16 }
];

const adults = users.filter(user => user.age >= 18);
const findSara = users.filter(user => user.name === 'Sara');

console.log('these are the adults', adults);
console.log('did we find Sara?', findSara)


    return (
        <>
        </>
    )


}





export default Notes;