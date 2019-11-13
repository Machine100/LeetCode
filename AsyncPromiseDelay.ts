
function delaytimer(){
   return new Promise((resolve) => {                             //return from function carrying a promise object
   setTimeout(()=>{ console.log('done waiting');resolve() }, 3000)
   })
}

async function main() {
    console.log('starting')
    await delaytimer()                   // await: expects the called function to return a promise object
    console.log('finished')
   }   

   main()