import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private breakpointObserver: BreakpointObserver) {}

  runHashMap() {
    const integers: number[] = [4, 3, 5, 6, 7, 8, 6, 5, 4, 4, 3, 3, 4, 5, 6, 77, 7, 5, 34, 3, 5, 5, 65];
    let hashMap: Map<number, number> = new Map()
    console.log(hashMap);
    integers.forEach((item) => {
      console.log('hashMap.has(item):', hashMap.has(item))
      console.log('item:', item)
      if (hashMap.has(item)) {
        hashMap.set(item, hashMap.get(item) + 1)
        console.log('Has the item')
      }
      else {
        hashMap.set(item, 1)
      }
      console.log(hashMap)
    })
  }

  runNthFib(position: number) {
    const fibSequence: number[] = []
    fibSequence[1] = 0
    fibSequence[2] = 1
    for (let i = 3; i <= position; ++i) {
      fibSequence[i] = fibSequence[i - 1] + fibSequence[ i - 2 ]
    }
    console.log(fibSequence)
    console.log(fibSequence[position])
  }

  runBST() {
    class BST {
      constuctor(value) {
        this.root = new Node(value)
      }
    }
    class Node {
      constructor(value) {
        // this.left = null 
        // this.right = null 
        // this.value = value

      }
    }
  }
}


    // given an array of integers, show how many times each value appears
    // arrow functions preserve the lexical value of this

        // new vim command: to surround text with a symbol use ys w (
    // new vim command: to go to end of the document G
    // adjustment: use the standard built-in object Map to create a hashmap in js instead of using a bare object.
    // for reasons, but an important one is that Map generates an object that is an iterable.
    // iterate through integers
    // if key doesn't exist, add it to the map
    //   otherwise increment the existing key