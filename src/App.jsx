
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WorkOrderDetail from './pages/WorkOrderDetail';
import EditWorkOrder from './pages/EditWorkOrder';
import User from './pages/User';
import CreateUser from './pages/CreateUser';
import UserDetail from './pages/UserDetail';
import EditUser from './pages/EditUser';
import DeleteUser from './pages/DeleteUser';
import WorkOrder from './pages/WorkOrder';
import NewWorkOrder from './pages/NewWorkOrder';
import DeleteWorkOrder from './pages/DeleteWorkOrder';
import Queue from './pages/Queue';
import NewQueue from './pages/NewQueue';
import EditQueue from './pages/EditQueue';
function App() {
  return (
    <Routes>
      <Route path='/' exact={true} element={<Home/>}/>
      <Route path='/workorder' element={<WorkOrder/>}/>
      <Route path='/workorder/new' element={<NewWorkOrder/>}/>
      <Route path='/workorder/:id' element={<WorkOrderDetail/>}/>
      <Route path='/workorder/edit/:id' element={<EditWorkOrder/>}/>
      <Route path='/workorder/delete/:id' element={<DeleteWorkOrder/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/user/new' element={<CreateUser/>}/>
      <Route path='/user/:id' element={<UserDetail/>}/>
      <Route path='/user/edit/:id' element={<EditUser/>}/>
      <Route path='/user/delete/:id' element={<DeleteUser/>}/>
      <Route path='/queue' element={<Queue/>}/>
      <Route path='/queue/new' element={<NewQueue/>}/>
      <Route path='/queue/edit/:id' element={<EditQueue/>}/>



    </Routes>
  );
}

export default App;