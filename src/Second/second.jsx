import React, { Component } from "react";


export default class Second extends Component{
    state={
      name:"",
      department:"",
      rating:0,
      data:[]
    }

     eventChange= (event)=>{
        this.setState({[event.target.name ]: event.target.value})
        this.setState({[event.target.department] : event.target.value})
        this.setState({[event.target.rating] : event.target.value})
    }
    

    onSubmit =()=>{
        const saveData = {
            name : this.state.name,
            department: this.state.department,
            rating : this.state.rating
        }

        const arr = this.state.data
        arr.push(saveData)
        this.setState({data : arr})
    }

    render(){
        return(
            <>
            
            Name : <input type="text" placeholder="name"  name="name" onChange={this.eventChange} className="input"/><br/>
             Department : <input type="text" placeholder="department" name="department" onChange={this.eventChange} className="input"/><br/>
             Rating : <input type="number" placeholder="rating" name="rating" onChange={this.eventChange} className="input"/><br/>
            <button onClick={this.onSubmit} className="submit">Submit</button >  
           <div className="result">
            {this.state.data.map((item)=>{
                return(
                    
                    <div className="section">
                    <p> Name:{ item.name} | </p>
                    <p> Department:{item.department}|</p>
                    <p> Rating:{item.rating}</p>
                    </div>
                    
                )
            })} 
            </div>         
            </>
        )
    }
    
}



