import './App.css'
import DataGrid from './components/DataGrid/DataGrid'
import data from './utils/sampleData'

function App() {
  return (
    <div className='mainClass'>
      <h2>Datagrid </h2>
    <DataGrid data={data}></DataGrid>
    </div>
  )
}

export default App
