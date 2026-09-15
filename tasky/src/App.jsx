import './App.css';
import Task from './components/Task.jsx';

function App() {
  return (
      <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty Dishwasher">
      
        </Task>
      <Task title="Laundry" deadline="Tomorrow" description="Fold Laundry">
       
        </Task>
      <Task title="Tidy" deadline="Today" description="Hoover">
        </Task>
    </div>
  );
}

export default App;
