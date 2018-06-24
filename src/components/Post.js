import React, { Component } from 'react';
import { Button } from 'react-materialize';

export default class Post extends Component{
    constructor(){
        super()
        this.state = {
            name: 'Vinnii'
        }
    }

    render() {
        return (
            <div>
            <Button>Hello {this.state.name} </Button>
            </div>
        )
    }
}
