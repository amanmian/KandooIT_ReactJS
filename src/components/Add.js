import React from 'react';
import classnames from 'classnames';
import './Add.css';
// import * as actionCreator from "../actions/index.js";
import {axios} from 'axios';
import Planet from '../usertype.js';
import {connect} from 'react-redux';
import {saveGames} from '../actions/action.js'
import {Redirect} from 'react-router-dom';



class Add extends React.Component{
    // constructor() {
    //     super();
    //     this.state = {
    //         planets: [],
    //     };
    // }

    state = {
        UserType: '',
        FirstName: '',
        LastName: '',
        DOB: '',
        Age: '',
        SSN: '',
        TaxId: '',
        PrimaryAddress1: '',
        PrimaryAddress2: '',
        SecondaryAddress1: '',
        SecondaryAddress2: '',
        CountryName: '',
        StateName: '',
        CityName: '',
        Zipcode: '',
        errors: {},
        loading: false,
        params: [],
        columnParams: [],
        planets: [],
        selected: '',
        loading: false,
        done: false

    }

    handleChange = (e) => {
        if (this.state.errors[e.target.name] !== '') {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
            [e.target.name]: e.target.value,
                errors
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //validation
        
        let errors = {};
        // if (this.state.UserType === '') errors.title = "User type can't be empty";
        if (this.state.FirstName === '') errors.FirstName = "First name URL can't be empty";
        if (this.state.LastName === '') errors.LastName = "Last name URL can't be empty";
        // if (this.state.DOB === '') errors.DOB = "DOB URL can't be empty";
        // if (this.state.Age === '') errors.Age = "Age can't be empty";
        // if (this.state.SSN === '') errors.SSN = "ssn can't be empty";
        // if (this.state.TaxId === '') errors.TaxId = "Tax id can't be empty";
        // if (this.state.PrimaryAddress1 === '') errors.PrimaryAddress1 = "PrimaryAddress1 can' be empty";
        // if (this.state.PrimaryAddress2 === '') errors.PrimaryAddress2 = "PrimaryAddress2 can' be empty";
        // if (this.state.SecondaryAddress1 === '') errors.SecondaryAddress1 = "SecondaryAddress1 can' be empty";
        // if (this.state.SecondaryAddress2 === '') errors.SecondaryAddress2 = "SecondaryAddress2 can' be empty";
        // if (this.state.CountryName === '') errors.CountryName = "CountryName can' be empty";
        // if (this.state.StateName === '') errors.StateName = "StateName can' be empty";
        // if (this.state.CityName === '') errors.CountryName = "City name can' be empty";
        // if (this.state.Zipcode === '') errors.Zipcode = "Zipcode can' be empty";
        
        let data = {
            firstname: this.state.FirstName,
            lastname: this.state.LastName
        }
        this.props.saveGames(data)
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0

        if (isValid) {
            const { title, coverUrl } = this.state;
            this.setState({ loading: true })
            this.props.saveGames({ title, coverUrl }).then(
                () => {this.setState({done:true})}
                // err => err.response.json().then(({errors}) => this.setState({errors,loading:false}))
            )
        }
    }

    // componentWillMount() {
    //     axios.get('http://localhost:63400/api/Countries')
    //     .then( response => {
    //         this.setState({params: response.data})
    //     })
    // }

    componentWillMount() {
        let initialPlanets = [];
        fetch('http://localhost:63400/api/usertype')
            .then(response => {
                return response.json();
            }).then(data => {
            initialPlanets = data.map((planet) => {
                return planet
            });
            console.log(initialPlanets);
            this.setState({
                planets: initialPlanets,
            });
        });
    }


    render()
    {
              
         const form =  (
            <form id="data" className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
            <h1>Add Details</h1>

            {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div> }

            <div className={classnames("field", "form-group", { error: this.state.errors.UserType })}>
                <label className="labels" htmlFor="UserType"><strong>User Type</strong></label>
                <Planet state={this.state}/>
                
                <span className="validationMsg"> {this.state.errors.UserType} </span>
            </div>

            <div className={classnames("field", "form-group", { error: this.state.errors.FirstName })}>
                <label className="labels" htmlFor="FirstName"><strong>First Name</strong></label>
                <input className="form-control" name="FirstName" value={this.state.FirstName} onChange={this.handleChange} id="FirstName" />
                <span className="validationMsg"> {this.state.errors.FirstName} </span>
            </div>

            <div className={classnames("field", "form-group", { error: this.state.errors.LastName })}>
                <label className="labels" htmlFor="LastName"><strong>Last Name</strong></label>
                <input className="form-control" name="LastName" value={this.state.LastName} onChange={this.handleChange} id="LastName" />
                <span className="validationMsg"> {this.state.errors.LastName} </span>
            </div>

            <div className={classnames("field", "form-group", { error: this.state.errors.DOB })}>
                <label className="labels" htmlFor="DOB"><strong>DOB</strong></label>
                <input className="form-control" name="DOB" value={this.state.DOB} onChange={this.handleChange} id="DOB" />
                <span className="validationMsg"> {this.state.errors.DOB} </span>
            </div>

            <div className={classnames("field", "form-group", { error: this.state.errors.Age })}>
                <label className="labels" htmlFor="Age"><strong>Age</strong></label>
                <input className="form-control" name="Age" value={this.state.Age} onChange={this.handleChange} id="Age" />
                <span className="validationMsg"> {this.state.errors.Age} </span>
            </div>
            <div className={classnames("field", "form-group", { error: this.state.errors.SSN })}>
                <label className="labels" htmlFor="SSN"><strong>SSN</strong></label>
                <input className="form-control" name="SSN" value={this.state.SSN} onChange={this.handleChange} id="SSN" />
                <span className="validationMsg"> {this.state.errors.SSN} </span>
            </div>

            <div className={classnames("field", "form-group", { error: this.state.errors.TaxId })}>
                <label className="labels" htmlFor="TaxId"><strong>TaxId</strong></label>
                <input className="form-control" name="TaxId" value={this.state.TaxId} onChange={this.handleChange} id="TaxId" />
                <span className="validationMsg"> {this.state.errors.TaxId} </span>
            </div>

            <div className={classnames("field", "form-group", { error: this.state.errors.PrimaryAddress1 })}>
                <label className="labels" htmlFor="PrimaryAddress1"><strong>PrimaryAddress1</strong></label>
                <input className="form-control" name="PrimaryAddress1" value={this.state.PrimaryAddress1} onChange={this.handleChange} id="PrimaryAddress1" />
                <span className="validationMsg"> {this.state.errors.PrimaryAddress1} </span>
            </div>

            <div className={classnames("field", "form-group", { error: this.state.errors.PrimaryAddress2 })}>
                <label className="labels" htmlFor="PrimaryAddress2"><strong>PrimaryAddress2</strong></label>
                <input className="form-control" name="PrimaryAddress2" value={this.state.PrimaryAddress2} onChange={this.handleChange} id="PrimaryAddress2" />
                <span className="validationMsg"> {this.state.errors.PrimaryAddress2} </span>
            </div>

            <div className={classnames("field", "form-group", { error: this.state.errors.SecondaryAddress1 })}>
                <label className="labels" htmlFor="SecondaryAddress1"><strong>SecondaryAddress1</strong></label>
                <input className="form-control" name="SecondaryAddress1" value={this.state.SecondaryAddress1} onChange={this.handleChange} id="SecondaryAddress1" />
                <span className="validationMsg"> {this.state.errors.SecondaryAddress1} </span>
            </div>

            <div className={classnames("field", "form-group", { error: this.state.errors.SecondaryAddress2 })}>
                <label className="labels" htmlFor="SecondaryAddress2"><strong>SecondaryAddress2</strong></label>
                <input className="form-control" name="SecondaryAddress2" value={this.state.SecondaryAddress2} onChange={this.handleChange} id="SecondaryAddress2" />
                <span className="validationMsg"> {this.state.errors.SecondaryAddress2} </span>
            </div>

            <div className={classnames("field", "form-group", { error: this.state.errors.CountryName })}>
                <label className="labels" htmlFor="CountryName"><strong>Country Name</strong></label>
                <select className="form-control" type="text" name="CountryName" value={this.state.CountryName} onChange={this.handleChange} id="CountryName" >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                </select>
                <span className="validationMsg"> {this.state.errors.CountryName} </span>
            </div>

            <div className={classnames("field", "form-group", { error: this.state.errors.StateName })}>
                <label className="labels" htmlFor="StateName"><strong>State Name</strong></label>
                <select className="form-control" type="text" name="StateName" value={this.state.StateName} onChange={this.handleChange} id="StateName" >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                </select>                    
                <span className="validationMsg"> {this.state.errors.StateName} </span>
            </div>

            <div className={classnames("field", "form-group", { error: this.state.errors.CityName })}>
                <label className="labels" htmlFor="CityName"><strong>City Name</strong></label>
                <select className="form-control" type="text" name="CityName" value={this.state.CityName} onChange={this.handleChange} id="CityName" >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                </select>                    <span className="validationMsg"> {this.state.errors.CityName} </span>
            </div>

            {/* <div className={classnames("field", "form-group", { error: this.state.errors.Zipcode })}>
                <label className="labels" htmlFor="Zipcode"><strong>Zipcode</strong></label>
                <input className="form-control" name="Zipcode" value={this.state.Zipcode} onChange={this.handleChange} id="Zipcode" />
                <span className="validationMsg"> {this.state.errors.Zipcode} </span>
            </div> */}
         

            <div className="field">
                <button className="btn btn-primary" type="submit">Save</button>
            </div>
        </form>
        )
        return (
            <div>
                { this.state.done ? <Redirect to="/list" /> : form }
            </div>
            
        );

        
    }
}

// const mapStateToProps = (state) => {
//     return state
// };

export default connect(null,{saveGames})(Add);
