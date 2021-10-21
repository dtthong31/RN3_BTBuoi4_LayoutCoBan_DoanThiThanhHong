import React, { Component } from 'react';
import { DemoComponentNonDefault } from './src/Lab1/DemoComponentNonDefault';
import DemoComponent from './src/Lab1/DemoComponent';
import DemoStyle from './src/Lab1/DemoStyle';
import DemoStyleSheet from './src/Lab2/DemoStyleSheet';
import DemoFlex from './src/Lab2/DemoFlex';
import DemoUi from './src/Lab2/DemoUI';
import DemoImage from './src/Lab2/DemoImage';
import BindingData from './src/Lab3/BindingData';
import BaiTapUI from './src/Lab3/BaiTapUI';
import RenderList from './src/Lab3/RenderList';
import BtBindingData from './src/BtBindingData';
import ExRender from './src/Lab4/ExRender';
import DemoScroll from './src/Lab4/DemoScroll';
import DemoFlatList from './src/Lab4/DemoFlatList';
import DemoSectionList from './src/Lab4/DemoSectionList';
import BTRender from './src/Lab4/BTRender';
import LayoutZalo from './src/LayoutZalo';
class App extends Component {
  render() {
    return (
     <LayoutZalo/>
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
