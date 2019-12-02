import React from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import Button from './components/Button'
import TextInput from './components/TextInput'
import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

class App extends React.Component {

  state = {
    location: '',
    count: 0,
    crown: {characters:[], values:[]}
  }

  handleChange = (name, value) => {
    this.setState((prevState) => ({
      ...prevState, [name]:  value
    }));
  }

  incrementCount = () => {
    this.setState(prevState => ({   
      ...prevState, 
      count: prevState.count +1
    }));
  }

  render(){
    console.log(this.state)
    return (<div className={c('App')}>
      <main className={c('App__main')}>
        <Button onClick={this.incrementCount} content={this.state.count}/>
        <TextInput   
            label='location'  
            id='id'
            name='location'
            value={this.state.location}
            onChange={this.handleChange}
            placeholder='placeholder'
            onClear={this.handleChange}
          />
          <pre>{JSON.stringify(this.state)}</pre>
      </main>
    </div>)
}
}
export default App;
