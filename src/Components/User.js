import React, { Component } from 'react';
import AddHandy from './AddHandy';
import Handys from './Handys';
import uuid from 'uuid';


class User extends Component {
  constructor() {
      super();
      this.state = { projects: [
        {id : uuid.v4(),
          to : "doctor",
      from : "WHOREHOUSE",
    time : "04:20",
  date : "10-09-1969"},

    {id : uuid.v4(),
      to : "penis enlargement",
  from : "home",
time : "04:20",
date : "10-09-2069"}
      ]}
  }


  render() {
      return (
        <div className='User'>
        <Handys />
        <AddHandy />
        </div>
      )
}
}
export default User;