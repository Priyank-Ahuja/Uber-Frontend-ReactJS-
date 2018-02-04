import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./Example.css";
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import DriverImage from './Images/driver.jpg';
import { Form, Input, Button } from "antd";
//import { locales } from "moment";

const stylePaper = {
  height: '320px',
  width: '375px',
  background: '#f8f8f9',
  position: 'fixed',
  marginLeft:'20px',
  marginTop: '20px'
};

const styleText = {
    marginLeft: '20px',
    marginTop: '20px',
    fontSize: '1.21429rem',
    fontFamily: 'ff-clan-web-pro,"Helvetica Neue",Helvetica,sans-serif!important',
    fontWeight: '400'
};

const FormItem = Form.Item;

class Signup extends Component {
  state = {
    res: {},
    res_received: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,
          role: 'driver'        
        };
        //delete values[""];
        console.log("Received values of form: ", values);
        alert('Your Cab is on its way.')
        // axios
        //   .post("https://api.crossfire37.hasura-app.io/signup", 
        //   {
        //     "user": {
        //       "provider": "username",
        //       "data": {
        //         "username": values.firstname,
        //         "password": values.password
        //       }
        //     },
        //     "role": values.role,
        //     "firstname": values.firstname,
        //     "lastname": values.lastname,
        //     "regno": values.vehicleregistrationnumber,
        //     "type": values.vehicletype,
        //     "capacity": values.vehiclecapacity,
        //     "city": values.city
        //   }
        //   )
          // .then(response => {
          //   console.log(response);
          //   localStorage.setItem('AuthToken' ,response.data.auth_token)
          //   this.setState({ res: response.data });
          //   this.setState({ res_received: true });
          // })
          // .catch(error => {
          //   alert("ERROR: User name already exists!")
          //   console.log(error);
          // });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let result = null;
    if (this.state.res_received) {
      alert('Sign Up Succesful!');
      console.log(this.state.res_recieved);
    }

    return (
      <Paper style={stylePaper}>
        
        <Form onSubmit={this.handleSubmit} className="signup-form">
          <div style={{marginTop: '20px', marginBottom: '20px'}}> 
            <div style={styleText}>
              To find the latitude & longitude of your location: 
              <a href="https://mynasadata.larc.nasa.gov/latitudelongitude-finder/"> Latitude-Longitude Finder</a>
            </div>
          </div>
          <FormItem>
            {getFieldDecorator("destinationlatitude", {
              rules: [{ required: true, message: "Please input your Pick up location: LATITUDE!" }]
            })(<Input placeholder="Destination: LATITUDE" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("destinationlongitude", {
              rules: [{ required: true, message: "Please input your Pick up location: LONGITUDE!" }]
            })(<Input placeholder="Destination: LONGITUDE" />)}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="signup-form-button"
            >
              BOOK YOUR CAB
            </Button>
          </FormItem>
          {result}
        </Form>
      </Paper>
    );
  }
}

const Sign_up = Form.create()(Signup);

export default Sign_up;
