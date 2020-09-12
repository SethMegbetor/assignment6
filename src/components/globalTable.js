import React from "react";

export default function GlobalTable() {
    
    fetch("https://disease.sh/v3/covid-19/countries?sort=cases&allowNull=true")
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas);
          function buildTable(data) {
            var table = document.getElementById("tdata");
            for (var i = 0; i < data.length; i++) {
              var row = `<tr>
                <td>${data[i].country}</td>
                <td>${data[i].cases}</td>
                <td>${data[i].active}</td>
                <td>${data[i].recovered}</td>
                <td>${data[i].deaths}</td>
              </tr>`;
              table.innerHTML += row;
            }
          }
          buildTable(datas);
        })
    

    return (
      <div class="country-table">
        <table>
          <tr>
            <th>Countries</th>
            <th>Total Cases</th>
            <th>Active Cases</th>
            <th>Recoveries</th>
            <th>Deaths</th>
          </tr>

          <tbody id="tdata" class="stripped-table"></tbody>
        </table>
      </div>
    );
  }

