import './App.css';
import TableData from './TableData';

async function getCountries(){
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "QnFSdDFqUVpPY2NOdWNJZmZTMVRJTG1LWWV3M0JJUDR1cWFZMktreA==");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};
let response = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
let data = await response.json();
return data;
}

function App() {
  const c = getCountries().then(response => {
    return response
  })
  console.log(c);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Country</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {
            c.map((val) => {
              return <TableData val = {val}/>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
