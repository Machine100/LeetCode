import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manipulate-objects',
  templateUrl: './manipulate-objects.component.html',
  styleUrls: ['./manipulate-objects.component.scss']
})
export class ManipulateObjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() { this.methodFour() }

  methodOne() {
    //you can type in any plain js code into this area
    //write a program that implements a function constructor to make an object.
    //after that iterate it to where it creates a series of objects from an array of inputs.

    function PeopleMaker (fN:string, lN:string) {
      this.firstName = fN
      this.lastName = lN
    }

    let person:object
    let firstNames:string[] = ['Bob', 'Tom', 'Oliver', 'Kitter', 'Bobo']
    let lastNames:string[] = ['Ross', 'Thumb', 'Twist', 'Kat', 'Yoho']
    let fullNames:string[] = []

    for (let i=0; i<firstNames.length; i++) {
      fullNames[i] = new PeopleMaker( firstNames[i], lastNames[i] )
    }
    debugger
    console.log(fullNames)
  }

  methodTwo () {
    //Rewrite the above code to use forEach and then run each iteration through the event queue.
    //Discover how this can be done with setTimeout 0 then research how to do it with es6 generators.
    // =-=-= Actually Async-Await eclipsed the generator/promise/iterator complexity in ES 7 so dont actually have to dig into this anymore.
    
    function PeopleMaker (fN:string, lN:string) {
      this.firstName = fN
      this.lastName = lN
    }

    let firstNames:string[] = ['Bob', 'Tom', 'Oliver', 'Kitter', 'Bobo']
    let lastNames:string[] = ['Ross', 'Thumb', 'Twist', 'Kat', 'Yoho']
    let output:string[] = []
 
    firstNames.forEach( element => {
      output.push(element)
    })

    // for (let i=0; i<1; i++) { setTimeout( e=>{console.log('complete')},10000 )}
    // setTimeout( e=>{console.log('complete2')},5000 )
    // setTimeout( e=>{console.log('complete3')},3000 )

    console.log(output)
  }
    
  methodThree () {
    // Write a functions that returns a promise that is resolved after a subsequent consloe.log

    function returnAPromise () {
      let insidePromise:object = new Promise( (resolve,reject) => {
        resolve( 'Print this string after the timeout as a message from the promise' )
        })
      console.log('inside the function:', insidePromise)
      return insidePromise
      }

      console.log('first')
      let promise:object = returnAPromise()
      console.log('Back in main', promise)
      console.log('second')
      promise.then ( e=>{console.log(e)})

    }

  methodFour () {

  }

  }


  
