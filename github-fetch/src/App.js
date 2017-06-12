import React, { Component } from 'react';
import './App.css';

const btn_style = {
  backgroundColor: '#ccab7e',
  fontWeight: 'bold',
  bprderRadius: '4px',
  padding: '15px',
  color: '#fff',
  textTransform: 'capitalize',
  borderRadius: '15px',
  border: '1px'
}


const input_style = {
  width: '20%',
  outline: 'none',
  borderRadius: '15px',
  marginRight: '15px',
  border: '1px',
  padding: '10px',
  textTransform: 'capitalize'
}

const parent_style = {
  textAlign: 'center',
  display: 'flex',
  flex: '1',
  justifyContent: 'center',
  flexDirection: 'row',
  color: '#fff'
}

const children_style = {
  display: 'flex',
  justifyContent: 'baseline',
  alignItems: 'center',
  paddingRight: '45px',
  paddingTop: '45px'
}

const img_style = {
  borderRadius: '50%',
  marginTop: '40px',
  width: '300px',
  height: '300px'
}

const search_form = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '45px'
}

const p_style = {
  color: '#6c6c6c'
}

class App extends Component {


state = {avatar_url: 'avatar_url', name: '', followers: 0, public_repos: 0}


async componentDidMount(){
  const req = await fetch('https://api.github.com/users/juju2993')
  const {avatar_url, name, followers, public_repos} = await req.json();
  this.setState({avatar_url, name, followers, public_repos});
}

changeHandler = (evn) => {
  this.setState({
    text: evn.target.value
  });
}

  render() {
    const {avatar_url, name, followers, public_repos} = this.state;
    return (
      <div className="App">
        <img style={img_style} src={this.state.avatar_url} alt="" />
          <div style={parent_style}>
            <div style={children_style}>
              <section>
                <h2>#Name</h2>
                <p style={p_style}>{name}</p>
              </section>
            </div>
            <div style={children_style}>
              <section>
                <h2>#Followers</h2>
                <p style={p_style}>{followers}</p>
              </section>
            </div>
            <div style={children_style}>
              <section>
                <h2>#Public repositories</h2>
                <p style={p_style}>{public_repos}</p>
              </section>
            </div>
          </div>
        <div style={search_form}>
          <input style={input_style} type="text" value={this.state.text} onChange={this.changeHandler} />
          <input style={btn_style} type="button" value="Fetch" onClick={this.componentDidMount.bind(this)} />
        </div>
        </div>

    );
  }
}

export default App;
