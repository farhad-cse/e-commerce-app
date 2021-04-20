import React, {Component,Fragment } from "react";
import Categories from "../components/home/Categories";
import FeatureProducts from "../components/home/FeatureProducts";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";

class HomePage extends Component {
    render(){
      return(
              <Fragment>
                  <h1 className="section-title">welcome to our online shop zone</h1>
                  <NewArrival></NewArrival>
                  <FeatureProducts></FeatureProducts>
                  <Collection></Collection>
                  <Categories></Categories>
    
              </Fragment>
  
      );
  
    }
  
  }
  export default HomePage;