import React, { Component } from "react";

export default class datum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("https://gtla6-covidtracker.herokuapp.com/")
      .then((res) => res.json())
      .then((jsonData) => {
        this.setState({
          isLoaded: true,
          data: jsonData,
        });
      });
  }
  render() {
    const { data } = this.state;
    console.log(typeof data);
    return (
      <>
        <div className="global-data-div">
          <ul className="global-data">
            <li>
              Total Cases
              <p>{data.cases}</p>
            </li>
            <li>
              Total Active
              <p>{data.active}</p>
            </li>
            <li>
              Recoveries
              <p>{data.recovered}</p>
            </li>
            <li>
              Deaths
              <p>{data.deaths}</p>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
