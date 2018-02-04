import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./Example.css";
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import SignInImage from './Images/download.jpg';
import { Form, Input, Button } from "antd";
import { locales } from "moment";

const stylePaper = {
    height: '440px',
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
          role: 'user'        
        };
        //delete values[""];
        console.log("Received values of form: ", values);
        axios
          .post("https://api.crossfire37.hasura-app.io/signup", {
            "user" : {
              "provider" : "username",//values.FirstName,
              "data": {
                "username": "Priyank@!25",//values.FirstName,
                "password": "122345556"//values.password
              }
            },
            "role": "user", //values.role,
            "firstname": "Priyank@!25",//values.FirstName,
            "lastname":  "Ahuja@!2", //values.LastName,
            }
          )
          .then(response => {
            console.log(response);
            localStorage.setItem('AuthToken' ,response.data.auth_token)
            this.setState({ res: response.data });
            this.setState({ res_received: true });
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let result = null;
    if (this.state.res_received) {
      alert('data recieved');
      console.log(this.state.res_recieved);
      
      // result = (
      //   <p>
      //     <b>
      //       {this.state.res[0].message
      //         ? this.state.res[0].message
      //         : "User created"}
      //     </b>
      //     <br />
      //     Visit{" "}
      //     <a target="_blank" href={this.state.res[1].link}>
      //       Google Sheet
      //     </a>
      //   </p>
      // );
    }

    return (
      <Paper style={stylePaper}>
        
        <Form onSubmit={this.handleSubmit} className="signup-form">
          <div style={{marginLeft:'0px', marginBottom: '40px'}}>
              <Avatar src={SignInImage} size='80px' />  
              <div style={styleText}>
                Ride With Uber
              </div>
          </div>
          <FormItem>
            {getFieldDecorator("First name", {
              rules: [{ required: true, message: "Please input your First Name!" }]
            })(<Input placeholder="FirstName" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("Last Name", {
              rules: [{ required: true, message: "Please input your Last Name!" }]
            })(<Input placeholder="LastName" />)}
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
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" },
                { min: 8, message: "Minimum password length is 8 characters" }
              ]
            })(<Input type="password" placeholder="Password" />)}
          </FormItem>
        
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="signup-form-button"
            >
              Register
            </Button>
            Or <a href="/Login">Sign in</a>
          </FormItem>
          {result}
        </Form>
      </Paper>
    );
  }
}

const Sign_up = Form.create()(Signup);

export default Sign_up;
