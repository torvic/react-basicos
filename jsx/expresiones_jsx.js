/* Presentando JSX - Es una extension de la sintaxis de JavaScript (no es un string ni HTML).*/

/* Insertando expresiones - Puedes poner cualquier expresion de JavaScript dentro de llaves en JSX  */
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