import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BatteryCarousel from "./BatteryCarousel";

class VirtualPowerPlantInstructions extends Component {
  state = {
    value: 0.0,
    myAddress: "",
    myBalance: 0,
    totalInvestment: 0,
    remainingInvestment: 0,
    numBatteries: 0,
    batteryList: [],
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.updateStats();
  }

  updateBatteryList = () => {
    // Here you can add the new dependency logic for updating battery list
    const { numBatteries } = this.state;
    if (numBatteries > 0) {
      const batteryList = [];
      for (let ind = 0; ind < numBatteries; ind++) {
        // Replace this with new dependency logic
        batteryList.push({ id: ind, name: `Battery ${ind + 1}` });
      }
      this.setState({ batteryList });
    }
  };

  updateStats = () => {
    console.log("updateStats");
    // Here you can add the new dependency logic for updating stats
    // For now, I'm just updating state with mock data
    this.setState({
      totalInvestment: 100,
      remainingInvestment: 50,
      numBatteries: 5, // Update this according to the new logic
      myBalance: 10,
    });
    this.updateBatteryList(); // Update battery list whenever stats are updated
  };

  addBattery = (batteryId) => {
    // Here you can add the new dependency logic for adding a battery
    console.log(`Add battery with ID: ${batteryId}`);
    this.updateBatteryList();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the new dependency logic for handling submission
    this.updateStats();
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const {
      batteryList,
      myBalance,
      myAddress,
      totalInvestment,
      remainingInvestment,
      numBatteries,
    } = this.state;

    return (
      <React.Fragment>
        <Row>
          <p>
            My Address: <span id="owner">{myAddress}</span>
          </p>
        </Row>
        <Row>
          <p>
            My Balance: <span id="">{myBalance} eth</span>
          </p>
        </Row>
        <Row>
          <Col>
            <h5>Total Amount Invested:</h5>
            <h4>
              <span id="totalInvestment">{totalInvestment}</span> eth
            </h4>
          </Col>
          <Col>
            <h5>Remaining Amount Left:</h5>
            <h4>
              <span id="remainingInvestment">{remainingInvestment}</span> eth
            </h4>
          </Col>
          <Col>
            <h5>Number of Batteries:</h5>
            <h4>
              <span id="numBatteries">{numBatteries}</span>
            </h4>
          </Col>
        </Row>
        <Row>
          <h3>Step 1:</h3>
          <p>
            Invest some eth into the joint investment fund (enough to purchase a battery in Step 2).
          </p>
        </Row>
        <Row>
          <div>
            <button
              className="btn-invest"
              type="button"
              onClick={this.handleSubmit}
            >
              Invest
            </button>
            <input
              onChange={this.handleChange}
              className="investmentAmount"
              placeholder="[Eth]"
              value={this.state.value}
            ></input>
          </div>
        </Row>
        <Row>
          <BatteryCarousel
            classType={"carousel-active"}
            batteries={batteryList}
          />
        </Row>
        <Row>
          <h3>Step 2:</h3>
          <p>
            Add one or more batteries to the battery array. (Click "Add to array")
          </p>
        </Row>
        <Row>
          <BatteryCarousel
            batteries={[]} // You can pass an empty array or replace it with the new dependency logic
            classType={"carousel"}
            addBattery={this.addBattery}
          />
        </Row>
      </React.Fragment>
    );
  }
}

export default VirtualPowerPlantInstructions;
