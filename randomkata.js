
function callMe () {                 
    let closured = 'I closeured'
    function referencea () {            
        console.log ('the closured variable printed direct from inside the function:', closured)
    }    
    return referencea
}

let functionReference = callMe()
functionReference()           // this is a reference to an object that contains a private scope.
console.log(functionReference.closured)