import React, {Component} from 'react'



export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {gpa: '',
                  gat: '',
                  pat1: '',
                  pat2: '',
                  pat3: ''};
 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleSubmit(event) {
    alert('คะแนนที่ได้คือ : ' + (((this.state.gpa*75)*20)+(this.state.gat*10)+(this.state.pat1*20)+(this.state.pat2*20)+(this.state.pat3*30)));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          GPA:
          <input type="number" value={this.state.gpa} onChange={e => {this.setState({gpa: e.target.value})}} />
          GAT:
          <input type="number" value={this.state.gat} onChange={e => {this.setState({gat: e.target.value})}} />
          PAT1:
          <input type="number" value={this.state.pat1} onChange={e => {this.setState({pat1: e.target.value})}} />
          <br></br> <br></br>
          PAT2:
          <input type="number" value={this.state.pat2} onChange={e => {this.setState({pat2: e.target.value})}} />
          PAT3:
          <input type="number" value={this.state.pat3} onChange={e => {this.setState({pat3: e.target.value})}} />
         </label>
         <br></br> <br></br>
        <input type="submit" value="Calculate" />
        
      </form>
    );
  }
}