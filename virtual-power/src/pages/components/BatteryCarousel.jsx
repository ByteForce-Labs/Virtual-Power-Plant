import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/BatteryCarousel.module.css";

class BatteryCarousel extends Component {
  handleAddBattery = (event) => {
    this.props.addBattery(event);
  };

  render() {
    const { batteries, classType } = this.props;

    return (
      <React.Fragment>
        <Row className={styles[classType]}>
          <Carousel interval={null}>
            {batteries.length > 0 ? (
              batteries.map((battery, ind) => {
                const { serialNumber, cost, priceThreshold, name, capacity, currentFilled, chargeRate } = battery;

                return (
                  <Carousel.Item key={ind}>
                    <img
                      className="d-block w-25"
                      src="noun_Battery_1582411.png"
                      alt="Battery"
                    />
                    <Carousel.Caption>
                      <h4>{name}</h4>
                      <p>Serial Number: {serialNumber}</p>
                      <p>Battery Capacity: {capacity} MWh</p>
                      <p>Current Amount Filled: {currentFilled} MWh</p>
                      <p>Battery Cost: {cost} eth</p>
                      <p>Price Threshold: {priceThreshold} eth/kWh</p>
                      <p>Charge Rate: {chargeRate} MWh/hr</p>
                      {this.props.addBattery && (
                        <button
                          className="btn-add-battery"
                          type="button"
                          onClick={() => this.handleAddBattery(ind)}
                        >
                          Add to array
                        </button>
                      )}
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })
            ) : (
              <React.Fragment>No batteries available.</React.Fragment>
            )}
          </Carousel>
        </Row>
      </React.Fragment>
    );
  }
}

export default BatteryCarousel;
