import React, { Component } from "react";
import classes from "../../../Button/Button.scss";
import Input from "../../../Input/Input";

class ItemRow extends Component {

 
  state = {
    img_path :'images/icon_close.png',
    tablerow: {
      itemname: {
        elementType: "select",
        elementConfig: {
          options: [
             { value: "select", displayValue: "select an item" },
            { value: "itemvalue1", displayValue: "itemvalue1" },
            { value: "itemvalue2", displayValue: "itemvalue2" },
            { value: "itemvalue3", displayValue: "itemvalue3" },
            { value: "itemvalue4", displayValue: "itemvalue4" }
          ]
        },
             },
      materialfees: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "0"
        },
             },
      packingfees: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "0"
        },
       
      },
      unpackingfees: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "0"
        },
       
      }
    },
     };


 onDelEvent() {
    this.props.onDelEvent(this.props.item);
    

  }
 changeDelImg() {
        this.setState({img_path :'images/icon_delete.png'});
  }

  renderInput = () => {
       const trowElementsArray = [];
    for (let key in this.state.tablerow) {
    trowElementsArray.push({
      id: key,
      config: this.state.tablerow[key]
      });
    }
    let trow = (
     <>
        {trowElementsArray.map(trowElement => (
          <td className={classes.td} key={trowElement.id} >
            <Input
              key={trowElement.id}
              elementType={trowElement.config.elementType}
              elementConfig={trowElement.config.elementConfig}
              value={trowElement.config.value}    
        
            />
          </td>
        ))}
        <td>
        
          <button onClick={i => this.onDelEvent(i)} className="DelButton"><img alt='del' src={this.state.img_path}></img></button>
        </td>
      </>
    );
    return ( <tr onClick={this.changeDelImg.bind(this)}>{trow}</tr>);
  };
  render() {  
    return(<>{this.renderInput()}</>);
  }
}
export default ItemRow;
