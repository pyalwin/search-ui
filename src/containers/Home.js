import React, {Component} from 'react';
import {Grid, Container,Form, Button} from 'semantic-ui-react';
import ResultCards from './ResultCards'
import axios from 'axios';

export default class HomeContainer extends Component {
    state = {
        searchQuery: '',
        numberOfItems:'',
        resultObj: []
    }

    handleChange = (e) => {
        let updateObj = {}
        updateObj[e.target.name] = e.target.value
        this.setState(updateObj)
    }
    formSubmit = (e) => {
        axios({
            url: 'http://localhost:8000/search_queries',
            method: 'GET',
            params: {
                terms: this.state.searchQuery.split(','),   
                no_of_results: this.state.numberOfItems
            }
        }).then((res) => {
            console.log(res.data)
            this.setState({resultObj: res.data})
        }).catch((err) => {
            console.log("err")
        })
    }

    render(){
        return(
            <Grid columns={2} divided style={{padding: '5vh'}}> 
                <Container>
                    <Form onSubmit={this.formSubmit}>
                        <Form.Input name='searchQuery' label="Search String" placeholder="Give a string to search" onChange={this.handleChange}></Form.Input>
                        <Form.Input name='numberOfItems' label="Number of results" placeholder="Give the number of results expected" onChange={this.handleChange}></Form.Input>
                        <Button type="submit">Search</Button>
                    </Form>                
                </Container>
                <Container>
                    {this.state.resultObj ? <ResultCards results={this.state.resultObj} /> : <p>Result container will be placed</p>}
                </Container>
    
            </Grid>
        )
    }
}