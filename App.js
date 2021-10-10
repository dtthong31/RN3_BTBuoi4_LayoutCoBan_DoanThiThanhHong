import React, { Component } from 'react';
import { DemoComponentNonDefault } from './src/Lab1/DemoComponentNonDefault';
import DemoComponent from './src/Lab1/DemoComponent';
import DemoStyle from './src/Lab1/DemoStyle';
class App extends Component {
  render() {
    return (
      // <DemoComponentNonDefault/>
      <DemoStyle />
    );
  }
}
// Stateful Component

// class App extends Component {
//   render() {
//     return (
//       <View style={{marginTop:20}}>
//           <Text style={{fontSize:20}}>Welcome to React-Native</Text>
//       </View>
//     );
//   }
// }

// function regular

// const App = function() {
//   return (
//     <View style={{ marginTop: 20 }}>
//         <Text style={{ fontSize: 20 }}>Welcome to React-Native regular</Text>
//     </View>
//   );
// }
// Stateless COmponent
// const App = () => {
//   return (
//     <View style={{ marginTop: 20 }}>
//         <Text style={{ fontSize: 20 }}>Welcome to React-Native 03</Text>
//     </View>
//   );
// }

export default App;
