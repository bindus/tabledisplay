import React, { Component } from 'react';
import ItemRow from './ItemRow/ItemRow';
import classes from "../Table.scss";

class ItemTable extends Component {


  renderHeader = () => {
    let header = [];
    this.props.colomns.forEach(colomn => {
      header.push(" " + colomn.heading);
    })
    return header.map((key, index) => {
      return <td  key={index}>{key}</td>
    })

  };

  renderFooter = () => {
    return <tr className="buttonrow"><td> <button type="button" onClick={this.props.onRowAdd} className="AddItem"><img alt='add' src="images/icon_add.png"></img> Add Item</button> </td></tr>
  };

  renderItemRow = () => {
  
    var rowDel = this.props.onRowDel;
    var item = this.props.items.map(function (item) {
      return (<ItemRow item={item} onDelEvent={rowDel.bind(this) } key={item.id}/>)
    });
    return (
      <table className="{classes.table}">
      <tbody>
           <tr>
            {this.renderHeader() }
          </tr>
          {item}
          {this.renderFooter() }</tbody>
         </table>
    );
  };

  render() {
    return (
      <div>{this.renderItemRow()}</div>
    );

  }

}


export default ItemTable;