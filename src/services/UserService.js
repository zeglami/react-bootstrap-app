import axios from 'axios';
import React, { Component } from 'react'

export  class UserService{

    static serverURL='https://jsonplaceholder.typicode.com/users';
    static getAllUsers(){
        return axios.get(this.serverURL)
    
    }
}
