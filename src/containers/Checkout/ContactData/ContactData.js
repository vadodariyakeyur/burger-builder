import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.module.css'
import axios from "../../../axois-order";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {

        event.preventDefault();
        this.setState({
            loading: true
        })

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Keyur',
                address: {
                    street: 'Katargam Road',
                    zipCode: '41351',
                    country: 'India'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false
                })
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
            })

        this.props.history.push('/');
    }

    render() {
        let form = (
            <form action="">
                <input className={classes.Input} type={"text"} name={"name"} placeholder={"Your Name..."}/>
                <input className={classes.Input} type={"email"} name={"email"} placeholder={"Your Email..."}/>
                <input className={classes.Input} type={"email"} name={"street"} placeholder={"Street"}/>
                <input className={classes.Input} type={"email"} name={"postal"} placeholder={"PostalCode"}/>
                <Button btnType={"Success"} clicked={this.orderHandler}>Order</Button>
            </form>
        );

        if (this.state.loading){
            form = <Spinner/>
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }

}

export default withRouter(ContactData);