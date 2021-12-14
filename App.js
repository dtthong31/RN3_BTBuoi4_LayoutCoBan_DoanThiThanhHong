import React, { Component } from 'react';
import { OnBroadScreen, store, Provider, RockPaperScissorRedux, DemoAxios, BTVN_Buoi12 } from "./src/Path"
import RootScreen from './src/Lab10'
import WrapHook from './src/Buoi20/Hook/OldImplement';
import DemoHook from './src/Buoi20/Hook';
import DemoAnimations from './src/Buoi22/DemoAnimations';
import DemoAnimated from './src/Buoi22/DemoAnimated';
import DemoTemplate from './src/Buoi22/DemoTemplate/Demotemplate';
class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <DemoTemplate />
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
