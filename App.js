import React, { Component } from 'react';
import { OnBroadScreen,store, Provider, RockPaperScissorRedux, DemoAxios, BTVN_Buoi12 } from "./src/Path"
import RootScreen from './src/Lab10'
class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <BTVN_Buoi12 />
      // </Provider>
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
