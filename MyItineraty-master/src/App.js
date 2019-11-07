import React from 'react';
import './App.css';
import Header from '../src/componente/header';
import Footer from '../src/componente/footer';
import Body from '../src/componente/Body';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    )
  }
}
export default App 

// function App() {
//   return (
//     <div className="App">
//         <Header></Header>
//         <Footer></Footer>
//     </div>


// )
// }


// export default App;
