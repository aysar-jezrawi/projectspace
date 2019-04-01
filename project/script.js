
let appId = "76c0ae665332cd1622d361bcfe7b3d3c";
let units = "metric";
let searchMethod="zip";

function searchWeather(searchTerm) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result=> {
    return result.json();

  }).then(result => {
    init(result);
  })
}

function init(resultFromServer) {
  console.log(resultFromServer);

}

document.getElementById('searchBtn').addEventListener("click", () =>{
  let searchTerm = document.getElementById("searchInput").value;
  if (searchTerm)
    searchWeather(searchTerm);

})
