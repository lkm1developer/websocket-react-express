import React from 'react';
import socketIOClient from "socket.io-client";
import './App.css';

class App extends React.Component {
  state = {
    socket: socketIOClient.connect('http://localhost:3005/'),
    // socket: socketIOClient.connect('http://www.mrexy.com:5000'),
    msg:'',
    connected:'Not'
  }
 

  componentDidMount() {
    

    const socket = this.state.socket;
    socket.on("connect", () => {
      console.log('connected');
      this.setState({connected:'Yes'})
    });

    socket.on('msg', data => {
      console.log({data});
      this.setState({msg:data})
    });

  }

  componentWillUnmount() {
    this.state.socket.close();
  }
  render() {
    const {connected, msg} =this.state;
    return (
      <>
      <h1>React app with websocket</h1>
      <h5>Is websocket connectd {connected}</h5>
      <h5>Message {msg}</h5>
      </>
    );
  }
}
 export default App;