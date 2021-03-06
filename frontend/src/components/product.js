import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";
import logo from "../blockchain.svg"
import Card2 from "./Card/card2";
import API from "../routes/routes";
import {
  Button,
  Icon,
  Card,
  Col,
  CardTitle,
  Slider,
  Footer,
  Slide,
  Navbar,
  NavItem
} from "react-materialize";
  class Products extends React.Component {

    
    render(){
      return (
        <div className="parent">
        <div className="root">
          <div className="App-header">
            <div className="svgs">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Select a product to purchase!</h2>
            </div>
           
      
          </div>
          <div className="listings">
           <Card2 
           image={""}
           title={""}
           description = {""}
           />
           <Card2 
           image={""}
           title={""}
           description = {""}
           />
           <Button>
           <Link to="/Checkout/">Checkout</Link>
           </Button>
          </div>
        </div>
        <div>
          <Footer
            copyrights="blockGames Copyright 2019"
            moreLinks={
              <a className="grey-text text-lighten-4 right" href="#!">
                More Links
              </a>
            }
            links={
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    LinkedIn (not complete)
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Github (not complete)
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    sources (not complete)
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    etc. (not complete)
                  </a>
                </li>
              </ul>
            }
            className="example"
          >
            <h5 className="white-text">Contact us</h5>
            <p className="grey-text text-lighten-4">
              Developers please contact us if you would like to sell your games on
              our marketplace!
            </p>
          </Footer>
        </div>
      </div>
    );
    }
  }

export default Products;

