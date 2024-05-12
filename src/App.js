// import logo from './logo.svg';
import './App.css';

import React, {Component} from "react";
import RestaurantInfo from "./member/RestaurantInfo";
import restaurantInfo from "./member/RestaurantInfo";
import Login from "./member/Login";

class App extends Component{

      render () {
            return (
                <div>
                      <Login/>
                      <RestaurantInfo
                          name={restaurantInfo.name}
                          phoneNumber={restaurantInfo.phoneNumber}
                          businessHours={restaurantInfo.businessHours}
                          prices={restaurantInfo.prices}
                          address={restaurantInfo.address}
                      />
                </div>
            );
      }
}

export default App;
