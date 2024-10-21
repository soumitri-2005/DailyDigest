import './App.css';
// this is a react class component we can find this by rcc
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor() {
      super();
      this.state = {
          mode: "light",
      };
  }
  // it is mainly for body color
  toggleMode = () => {
      if (this.state.mode === "light") {
          this.setState({
              mode: "dark",
          });
          document.body.style.backgroundColor = "black";
      } else {
          this.setState({
              mode: "light",
          });
          document.body.style.backgroundColor = "white";
      }
  }

  pageSize = 21;
  state = {
    progress: 0,
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
          {/* for top loader */}
          <LoadingBar
            // here we are setting the properties
            height={2}
            color='#0D6EFD'
            progress={this.state.progress}
          />
          <Routes>
              <Route exact path="/about" element={<About mode={this.state.mode}/>} />
              <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" mode={this.state.mode} pageSize={this.pageSize} country="us" category="General" />} />
              <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" mode={this.state.mode} pageSize={this.pageSize} country="us" category="Business" />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" mode={this.state.mode} pageSize={this.pageSize} country="us" category="Entertainment" />} />
              <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" mode={this.state.mode} pageSize={this.pageSize} country="us" category="General" />} />
              <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" mode={this.state.mode} pageSize={this.pageSize} country="us" category="Health" />} />
              <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" mode={this.state.mode} pageSize={this.pageSize} country="us" category="Science" />} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" mode={this.state.mode} pageSize={this.pageSize} country="us" category="Sports" />} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" mode={this.state.mode} pageSize={this.pageSize} country="us" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

