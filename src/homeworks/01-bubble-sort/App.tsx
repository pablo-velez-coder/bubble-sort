import {Component} from 'react';

import { bubbleSortRecursive, sleep } from '../../utils';
import './App.scss'
import Bar from '../../components/Bar/Bar';
import { initialState } from '../../constants';


interface AppState {
  array: number[],
  steps: number[],
  isStarted: boolean,
  isSorting: boolean,
  currentStep: number,
  count: number,
  delay: number,
}
class App extends Component<AppState> {
  state = initialState
  
/*   componentDidMount(){
    this.generateRandomArray()
  } */

  generateRandomNumber = (min:number, max:number):number =>{
    return Math.floor(Math.random()*(max-min)+ min) 
  }

  generateRandomArray = ()=> {
    const count = this.state.count;
    const temp = []

    for (let i =0; i <count; i++) {
      temp.push(this.generateRandomNumber(50,200))
    }
    this.setState({
      array: temp,
      arrayStep: [temp]
    }, ()=>{
      this.allSteps()
    })
    
  }

  reset = () =>{
    this.setState(initialState)
    this.generateRandomArray()
  }
  
  allSteps = () =>{
    let array = [ ...this.state.array]
    let steps = [ ...this.state.steps]
    bubbleSortRecursive(array,0,steps)
    this.setState({
      steps
		});
  }

  async bubbleSortRecursive(input:number[],curr: number = 0):Promise<number[]>{
    if(curr===input.length-1)return input;
    let newArray = [...input]
    for (let i = 0; i < input.length; i++) {
      if (newArray[i] > newArray[i + 1]) {
        [newArray[i],newArray[i + 1]] = [newArray[i + 1],newArray[i]]  
      }
    }
    
    if(this.state.isSorting){
      await sleep(this.state.delay)
      this.setState({
        array: newArray,
        currentStep:curr+1
      })
      return this.bubbleSortRecursive(newArray,curr+1);
    }else{
      return []
    }
   }

  start = async () => {
    this.setState({
      isSorting: true,
      isStarted: true
    }, async()=>{
      const array  = this.state.array;
      const curr = this.state.currentStep
      const sortedArray = await this.bubbleSortRecursive(array, curr)
      if(sortedArray){
        this.setState({
          isSorting: false
        })
      }
    })
  }

  pause = async () =>{
    this.setState({
      isSorting: false,
    })
  }

  next = () =>{
    const newCurrentStep = this.state.currentStep + 1
    this.setState({
      array: this.state.steps[newCurrentStep],
      currentStep: newCurrentStep
    })
  }
  previous = () =>{
    const newCurrentStep = this.state.currentStep - 1
    this.setState({
      array: this.state.steps[newCurrentStep],
      currentStep: newCurrentStep
    })
  }

  render() {
    return (
      <>
     {this.state.isStarted &&  <p>{(this.state.isSorting ) ? ' sorting in progress': 'sorted'}</p>}
      <div className="App">
        <div className="App__bars">
        {this.state.array.map((bar,index) => (
          <Bar
          key={index}
          length={bar}
          />
        ))}
        </div>
      </div>
      <button
      disabled={!this.state.isStarted || this.state.currentStep === this.state.array.length}
      onClick={this.pause}>
          Pause
        </button>
      <button
      disabled={this.state.currentStep === 0}
      onClick={this.previous}>
          Previous
        </button>
      <button 
      disabled={this.state.currentStep === this.state.array.length}
      onClick={this.start}>
          Start
        </button>
      <button 
      disabled={this.state.currentStep === this.state.array.length-1}
      onClick={this.next}>
          Next
        </button>
      <button onClick={this.reset}>
          Reset
      </button>
      </>
    );
  }
}


export default App;
