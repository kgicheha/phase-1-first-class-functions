const spy = () => {

}
const receivesAFunction = (spy) => {
    spy();
}

const returnsANamedFunction = () => {
    const result = () =>{

    }
    return result
}
const returnsAnAnonymousFunction = function() {
    return () => console.log("This is anonymous!")
}