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
  height: '680px',
  width: '400px',
  background: '#f8f8f9',
  position: 'relative',
  marginLeft:'35%',
  marginTop: '70px'
};

const styleText = {
    marginLeft: '100px',
    marginTop: '-50px',
    fontSize: '1.71429rem',
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
        axios
          .post("https://api.crossfire37.hasura-app.io/signup", 
          {
            "user": {
              "provider": "username",
              "data": {
                "username": values.firstname,
                "password": values.password
              }
            },
            "role": values.role,
            "firstname": values.firstname,
            "lastname": values.lastname,
            "regno": values.vehicleregistrationnumber,
            "type": values.vehicletype,
            "capacity": values.vehiclecapacity,
            "city": values.city
          }
          )
          .then(response => {
            console.log(response);
            localStorage.setItem('AuthToken' ,response.data.auth_token)
            this.setState({ res: response.data });
            this.setState({ res_received: true });
          })
          .catch(error => {
            alert("ERROR: User name already exists!")
            console.log(error);
          });
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
            <Avatar src={DriverImage} size='80px'  />  
            <div style={styleText}           >
              Sign up to Drive
            </div>
          </div>
          <FormItem>
            {getFieldDecorator("firstname", {
              rules: [{ required: true, message: "Please input your First Name!" }]
            })(<Input placeholder="First Name" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("lastname", {
              rules: [{ required: true, message: "Please input your Last Name!" }]
            })(<Input placeholder="Last Name" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            })(<Input placeholder="Email" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("vehicleregistrationnumber", {
              rules: [{ required: true, message: "Please input your Vehicle Resgistration Number!" }]
            })(<Input placeholder="Vehicle Registration Number" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("vehicletype", {
              rules: [{ required: true, message: "Please input your Vehicle Type!" }]
            })(<Input placeholder="Vehicle Type" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("vehiclecapacity", {
              rules: [{ required: true, message: "Please input your Vehicle Capacity!" }]
            })(<Input type="number" placeholder="Vehicle Capacity" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" },
                { min: 8, message: "Minimum password length is 8 characters" }
              ]
            })(<Input type="password" placeholder="Password" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("city", {
              rules: [{ required: true, message: "Please input your City!" }]
            })(<Input placeholder="City" />)}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="signup-form-button"
            >
              SIGN UP AS DRIVER
            </Button>
            Or <a href="/Login">Login</a>
          </FormItem>
          {result}
        </Form>
      </Paper>
    );
  }
}

const Sign_up = Form.create()(Signup);

export default Sign_up;
