import React, { Component } from 'react';



class Account extends Component {
  constructor(){
    super()
    this.state = {
      account: 0,
      balance: 0,
      input: 0,
    }
  }

  //write deposit function

  deposit = () => {
    this.setState({
      balance: this.state.amount + this.state.balance
    })
  }
  //write withdrawal function

  handleChange = (e)=>{
    if(!isNaN(e.target.value)){
      this.setState({
        amount: parseInt(e.target.value)
      })
    }
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" onChange={this.handleChange} 
        placeholder="enter an amount" />
        <input type="button" onClick={this.deposit} 
        value="Deposit" />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
