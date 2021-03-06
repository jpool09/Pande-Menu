import React, { Component } from "react";
import SearchCountryInfo from "./../SearchCountryInfo/SearchCountryInfo";
import { Card, CardHeader } from "@material-ui/core";

class SearchInfo extends Component {
  state = {
    filterText: "",
  };

  onFilterTextChange = (filterText) => {
    this.setState({ filterText: filterText });
  };

  handleFilterTextChange = (e) => {
    this.onFilterTextChange(e.target.value);
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  render() {
    const rows = [];
    const { filterText } = this.state;
    const Countries = this.props.Countries;

    return (
        <>
        <div className="title-container">
          <h4>Buscador</h4>
        </div>
        <div className="text-container">
          <p>Con este buscador encontrarás los datos de cualquiera de los paises del mundo. Te mostrará datos muy exactos </p>
        </div>
        <Card className="card card-form">
            {/* <CardHeader
            title="Busque la información del país"
            subheader="Que desee conocer confirmados, muertes y recuperados"
            /> */}
            <div className="space">
            <form noValidate>
                <input
                className="input-country"
                type="text"
                list="data"
                placeholder="Buscar país..."
                value={filterText}
                onKeyPress={this.handleKeyPress}
                onChange={this.handleFilterTextChange}
                />
                <datalist id="data">
                {Countries &&
                    Countries.map((item, key) => (
                    <option key={key} value={item.Country} />
                    ))}
                </datalist>
            </form>
            <div>
                {Countries &&
                Countries.map((item, key) => {
                    if (item.Country.indexOf(filterText) === -1) {
                    return;
                    }
                    rows.push(<SearchCountryInfo key={key} Countries={item} />);
                })}
                <div>{rows.length > 2 ? "Sin resultados..." : rows}</div>
            </div>
            </div>
        </Card>
      </>
    );
  }
}

export default SearchInfo;
