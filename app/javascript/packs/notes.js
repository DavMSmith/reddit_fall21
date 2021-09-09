//Components - building blocks, pages, front end actions. Blocks can make individual pages. 
  //for example, on th devpoints lab site, each page is a component...

import { functions } from "lodash"
import { components } from "react_ujs"

// import { components } from "react_js"

  //or each section can be treated as a component
  //There are multiple ways to a components...
    //class People extends component { =old syntax
     //const People = () => {
      //const People = (props) => {
      //   return
      // }
      // import Cart from './Cart.js' //This component is in a differnt file within the same folder, so we import it.
      // const People = ({ sub }) => (
    // )
    // export default People
    //We typically use a curly brace if we are performing an action before the return.
    //The other way of displaying a component is with parentheses. 
    // Components have to be defined and then exported. If we use a component from 
    // a different file, we wouljd use an import command. 
    
    //const defines our variable names and can be used to define components. 
    //it uses a functional component that makes processing time faster than a class approach
//props-properties that are passed into the component from another page, info and data into the  ----
///from the controller to component is key value pairs
// const People = (props) => {
//       //   return (
//         props.name
//         props.desc
//       )
//       // }
//        // const People = ({ name, desc }) => {
//          return (
//            name
//            desc
//          )
//        }
    // )

//jsx -html and js
return in a single item, syntax error otherwise
return (
  <h1>hshsh</h1>
  <p>afafafa</p>
)
-the two lines after retrun would return an error.
Instead, we would need to </> instead
//{
//js here

// import { components } from "react_js"

//}
// {<h1 className="" onClick></h1>  */}//anything with more than one name would be typed in camel case
let
const
#We are using constant for functions, variables and components.

const add = (arg, arg) => {

}
'Hello${name}' //is how you would do interpolation, a money sign in place of an octothorpe
const person { id: 1, name: 'bob', age: 23}
person.name
//person ['name']
person.age //We can grab the value by referencing th key. 
// const name = person.name
// const age = person.age
const {name, age, id } = person
NavigationPreloadManagerid