import React from "react";
import "./list.css";
import ListItem from "./ListItem";
import Mandje from "./Mandje";
import "./list.css";
import InputField from "./InputField";

let groceryItems = [];
let refid = 0;
let waarde = "";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [],
      winkelMandje: [],
      nieuwItem: "",
    };
    this.clickItem = this.clickItem.bind(this);
    this.leegWinkelmand = this.leegWinkelmand.bind(this);
    this.voegItemToe = this.voegItemToe.bind(this);
  }

  leegWinkelmand() {
    this.setState({ winkelMandje: [] });
  }

  voegItemToe() {
    let nieuwItem = document.getElementById("nieuwItem");
    waarde = nieuwItem.value;
    if (waarde) {
      let controleArray = this.state.groceryItems;
      refid = 0;
      controleArray.map((item) => {
        if (item.titel.toUpperCase() === waarde.toUpperCase()) {
          item.amount += 1;
          refid = item.id;
        }
        return item;
      });
      if (refid === 0) {
        let nieuwId = this.state.groceryItems.length + 1;
        let nieuwLijstje = this.state.groceryItems;
        nieuwLijstje[nieuwId - 1] = { id: nieuwId, titel: waarde, amount: 1 };
        this.setState({ groceryItems: nieuwLijstje });
      } else {
        this.setState({ groceryItems: controleArray });
      }
      nieuwItem.value = "";
    } else alert("Om een item toe te voegen moet je wel wat invullen");
  }

  clickItem(id) {
    let winkelMandjeArr = this.state.winkelMandje;
    let doorgaan = "J";
    refid = 0;
    groceryItems = this.state.groceryItems;
    if (winkelMandjeArr.length !== 0) {
      winkelMandjeArr.forEach((item) => {
        if (item.id === id)
          if (groceryItems[id - 1].amount === item.amount) {
            doorgaan = "N";
            alert(
              "Deze boodschap ligt met bijbehorend aantal al in het winkelmandje"
            );
          } else {
            doorgaan = "pasAmountAan";
          }
      });
    }
    if (doorgaan === "J") {
      const boodschapItem = this.state.groceryItems[id - 1];
      let aangepastWinkelmandje = this.state.winkelMandje;
      aangepastWinkelmandje.push(boodschapItem);
      this.setState({ winkelMandje: aangepastWinkelmandje });
    } else {
      if (doorgaan === "pasAmountAan") {
        this.setState({ winkelMandje: winkelMandjeArr });
      }
    }
  }

  componentDidMount() {
    groceryItems.push({ id: 1, titel: "Rijst", amount: 1 });
    groceryItems.push({ id: 2, titel: "Aardappelen", amount: 1 });
    groceryItems.push({ id: 3, titel: "Melk", amount: 1 });
    groceryItems.push({ id: 4, titel: "mango's", amount: 1 });

    this.setState({ groceryItems: groceryItems });
  }

  render() {
    let groceryItems2 = this.state.groceryItems.map((element) => (
      <ListItem
        key={element.id}
        item={element}
        clickItem={this.clickItem}
        className="list-item"
      />
    ));
    let winkelMandje2 = this.state.winkelMandje.map((element) => (
      <Mandje key={element.id} item={element} className="mandje-item" />
    ));
    return (
      <div>
        <h1 className="algBoodschap">Boodschappenlijst</h1>
        <div className="lijstjes">
          <div className="lijstje">
            <h1>Boodschappenlijst</h1>
            <InputField voegItemToe={this.voegItemToe} />
            <ul>{groceryItems2}</ul>
          </div>
          <div className="lijstje2">
            <h1>Winkelmandje</h1>
            <button id="deleteKnop" onClick={this.leegWinkelmand}>
              Leeg de winkelmand
            </button>
            <ul id="winkelmandje">{winkelMandje2}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
