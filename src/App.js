// import logo from './logo.svg';
import './App.css';

import React, {Component} from "react";
import RestaurantInfo from "./member/RestaurantInfo";
import restaurantInfo from "./member/RestaurantInfo";

class App extends Component {

      render () {
            // Express.js를 사용하는 경우
            const express = require('express');
            const app = express();

// CORS 허용 설정
            app.use((req, res, next) => {
                  res.setHeader('Access-Control-Allow-Origin', '*');
                  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
                  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
                  next();
            });

            return (
                <RestaurantInfo name={restaurantInfo.name} phoneNumber={restaurantInfo.phoneNumber} businessHours={this.state.businessHours} prices={this.state.prices} address={this.state.address}></RestaurantInfo>
            );
      }
}
export default App;
