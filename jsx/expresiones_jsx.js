/* Presentadno JSX */
/* Insertando expresiones  */

const name = "Josh Perez";
const element = <h1>Hello, {2 + 2}</h1>;

ReactDOM.render(element, document.getElementById("root"));





/* Usando una funcion de JavaScript en JSX */
function formatName(user) { 
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

const element = (
  <h1>
    Hello, {formatName(user)}
  </h1>
);

ReactDOM.render(element, document.getElementById("root"));