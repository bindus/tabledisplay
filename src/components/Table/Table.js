import React, { Component } from "react";

import ItemTable from "./ItemTable/ItemTable";

class Table extends Component {
  constructor(props) {
    super(props);
   
    this.state = {};
    this.state.items = [];
    this.state.colomns = [
      {
        heading: "Item",
        inputType: "Select"
      },
      {
        heading: "Material Fee",
        inputType: "currency"
      },
      {
        heading: "Packing Fee",
        inputType: "currency"
      },
      {
        heading: "Unpacking Fee",
        inputType: "currency"
      },
      {
        heading: "",
        inputType: ""
      }
    ];
  }
  handleRowDel(item) {
    var index = this.state.items.indexOf(item);
    this.state.items.splice(index, 1);
    this.setState(this.state.items);
  };
  handleAddEvent() {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var item = {
      id: id,
      item: "",
      materialfee: 0,
      packingfee: 0,
      unpackingfee: 0
    }
    this.setState({ items: [...this.state.items, item ] }) 
   }
  handleItemTable(evt) {
    var items = this.state.items.slice();
    var newItems = items.map(function (item) {
      for (var key in item) {
                  item[key] = item.value;
      }
      return item;
    });
    this.setState({ items: newItems });
  };
  render() {
    return (
      <div>
        <ItemTable onItemTableUpdate={this.handleItemTable.bind(this) } onRowAdd={this.handleAddEvent.bind(this) } onRowDel={this.handleRowDel.bind(this) } items={this.state.items} colomns={this.state.colomns}/>
      </div>
    );
  }
}
export default Table;
