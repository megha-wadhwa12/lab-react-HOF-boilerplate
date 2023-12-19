import React, { Component } from "react";

export default class HigherOrderFunctions extends Component {
  //Progression 1
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }
  // Progression 2
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <div key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </div>
    ));
    return mapRows;
  };

  //Progression 3
  renderUserType = () => {
    const data = this.state.userData;
    const filter = data.filter((item) => item.user_type === "Designer");
    const mapRows = filter.map((item) => (
      <div key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </div>
    ));
    return mapRows;
  };

// Progression 4
  renderJ = () => {
    const data = this.state.userData;
    const filter = data.filter((item) => item.name[0] === "J");
    const mapRows = filter.map((item) => (
      <div key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </div>
    ));
    return mapRows;
  };

  //Progression 5
  renderItemsByAge = () => {
    const data = this.state.userData;
    const filter = data.filter((item) =>item.age>28 && item.age<=50 );
    const mapRows = filter.map((item) => (
        <div key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </div>
    ));
    return mapRows;
};

//Progression 6
renderItemsByExperience = () => {
    const data = this.state.userData;
    const filter = data.filter((item) =>item.user_type === "Designer" );
    let years=0;
    const mapRows = filter.map((item) => (
        years+=item.years
    ));
return <>{years}</>;
};

  render() {
    return (
      // instead of a parent div tag, we can also use React.Fragment
      <>
        <h2>Display all items</h2>
        <div className="display-box">
          <ul>{this.renderItems()} </ul>
        </div>
        <div>
          <h2>Display based on user type</h2>
          <ul>{this.renderUserType()}</ul>
        </div>
        <div>
          <h2>Filter all data starting with J</h2>
          <ul>{this.renderJ()}</ul>
        </div>
        <div>
          <h2>Filter all data based on age greater than 28 and age less than or equal to 50</h2>
          <ul>{this.renderItemsByAge()}</ul>
        </div>
        <div>
          <h2>Find the total years of the designers</h2>
          <ul>{this.renderItemsByExperience()}</ul>
        </div>
      </>
    );
  }
}
