import React, { Component } from 'react';

import '../css/RestAPIs.css';
import HerokuApp from '../img/herocuApp.PNG';

const ItemList = (props) => {
    const bullets = props.items.map((item) => {
    return <li onClick={props.handleClick} key={item._id}>{item.quote}</li>
    });
    return <div className="scrall">
            <ul>{bullets}</ul>
            <li className="recordSaved"></li>
        </div>
}

const ItemDetails = (props) => {
    return <div>
        <div className="details">
            <h3>Click on the quote to see details.</h3>
            <label for="quote">Quote:</label>
            <input onChange={props.handleEdit} placeholder="Enter a quote here..." name="quote"  value={props.item.quote || ""}></input><br/>
            <label for="author">Author:</label>
            <input onChange={props.handleEdit} placeholder="Jose L Lopez" name="author" value={props.item.author || ""}></input><br/>
            <label for="date">Date:</label>
            <input onChange={props.handleEdit} placeholder='"December 25, 2020"' name="date" value={props.item.date || ""}></input>
        </div>
        <p>ID: {props.item._id}</p>
        <button onClick={props.handleClear}>Reset</button>
        <button onClick={props.handleDelete}>Delete</button>
        <button onClick={props.handleSave}>Create</button>
        <button onClick={props.handleSave}>Update</button>
    </div>
}

class RestAPIs extends Component {
    constructor(props){
        super();
        this.state = {
            items: [],
            currentItem: {}
        };
        
        this.selectItem = this.selectItem.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    // Handle item save
    handleSave() {
        let newItem = this.state.currentItem;
        if (!newItem.quote) {
          return;
        }
        fetch("https://rest-apis-expresss.herokuapp.com/api/v1/quotes/", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then((json) => {
        let newData;
        if (!newItem._id) { // add new item to array
            newData = this.state.items;
            newItem._id = json._id;
            newData.push(newItem);
            console.log("Record added");
        } else { // update existing item 
            console.log("Record updated");
            newData = this.state.items.map((item) => {
              if (item._id === newItem._id) {
                item = newItem; 
              }
              return item;
            });          
        }
          // Update state with new array
          this.setState({items: newData});
        });
    }

    handleDelete(e){
        console.log('Deleting me');
        let id = this.state.currentItem._id;
        fetch("https://rest-apis-expresss.herokuapp.com/api/v1/delete/" + id)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            // Filter all items except the one to be removed
            const remainder = this.state.items.filter((item) => {
                return item._id !== id;
            })
            // Update state with new array & clear current item
            this.setState({items: remainder, currentItem: {}});
        })
        .catch(err => console.log(err));
    }

    componentWillMount() {
        fetch("https://rest-apis-expresss.herokuapp.com/api/v1/quotes")
          .then(res => res.json())
          .then(items => this.setState({ items }, ()=> console.log('fetching the data', 
          items)))
    }

    handleEdit(e){
        console.log(e.target.value);
        let newItem = this.state.currentItem;
        newItem[e.target.name] = e.target.value;
        this.setState({currentItem: newItem});
    }

    handleClear(){
        this.setState({currentItem: {}});
    }

    selectItem(e){
        console.log(e.target.innerText);
        const found = this.state.items.find((item) => {
            return item.quote === e.target.innerText;
        });
        console.log(found);
        this.setState({currentItem: found});
    }
    
    render(){
        return(
            <div className="restapiss">
                <h1>REST API's implementation with Node.js, Express, and Heroku.</h1>
                <label for="quotes">List of quotes:</label>
                <ItemList items={this.state.items} handleClick={this.selectItem}/>
                <br/>
                <ItemDetails 
                    item={this.state.currentItem}
                    handleClear={this.handleClear}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    handleSave={this.handleSave}
                    
                />

                <div className="diagramheroku">
                <p>A simple records system using MongoDB, Express.js, React.js, and Node.js 
                    with real-time Create, Read, Update, and Delete operations.</p>
                    <img src={HerokuApp} alt="resoult." />
                </div>
            </div>
        );
    }

}

export default RestAPIs;