// Creating Closure Scope Chains

let globalVariable = welcome;
function outer(){
    alert (globalVariable("welcome"))
    course = Holberton
    function inner(){
        function inception(){
        alert(globalVariable(course))
        exclamation = !
        console.log(inception)
        }
    console.log(inner)
    }
console.log(outer)
}