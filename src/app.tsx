import React, { PureComponent } from 'react';
import './index.scss';
// We can import now using alias: 'assets/pic_bulbon.gif', not './assets/pic_bulbon.gif'.
import lightOnImg from 'assets/pic_bulbon.gif?as-module';
import lightOffImg from 'assets/pic_bulboff.gif?as-module';

interface AppState {
  lightOn: boolean;
}

class App extends PureComponent<{}, AppState> {
  state = {
    lightOn: false,
  };

  onClick = () =>
    this.setState((prevState) => ({ lightOn: !prevState.lightOn }));

  render() {
    const { lightOn } = this.state;

    return (
      <div className="app-container">
        <button onClick={this.onClick}>
          {lightOn ? 'Switch Off' : 'Switch On'}
        </button>
        <img src={lightOn ? lightOnImg : lightOffImg} />
      </div>
    );
  }
}

export default App;
