
import StudentForm from './components/Students'
import Table from './components/Table';
import {Routes , Route } from "react-router-dom";
import { DataProvider } from './context/DataContext';



const App = () => {

  return (
    <div className='App'>
      <DataProvider>
      

      <Routes>
      <Route path='/' element={<StudentForm/> } />
      
      <Route path="/table" element={<Table/>} />
      
    </Routes>
    </DataProvider>
     

    </div>
  );
};

export default App;