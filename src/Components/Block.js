import React, { Component } from 'react';
import '../CSS/Block.css';
import { Button } from 'reactstrap';


class Block extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.toggle=this.toggle.bind(this);
    this.renderBox=this.renderBox.bind(this);

  }
  toggle(num){
    this.setState({num:num});
  }
  renderBox(){
    let lst=[];
    for(let i=1;i<=this.state.num;i++){
      lst.push( <div className="box"><h2 className="boxText">{this.state.num}</h2></div>);
    }
    return lst;
  }

  render() {
    return (
      <div>
        <div className="centerClass">
          <Button onClick={()=>{this.toggle(1)}}>One</Button>
          <Button onClick={()=>{this.toggle(2)}}>Two</Button>
          <Button onClick={()=>{this.toggle(3)}}>Three</Button>
        </div>
        <div className="flexClass">
          {this.renderBox()}
        </div>
      </div>
    );
  }
}

export default Block;
