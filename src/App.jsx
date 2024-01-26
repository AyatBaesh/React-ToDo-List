import './styles/App.css';
import Task from './components/Task';
function App() {
  return (
    <>
      <div className = 'inputDiv'>
        {/* <Input/> */}
      </div>
      <div className='categoriesDiv'>
        <Task task = {{name:'test', category:'todo'}} />
        {/* 
          <Category name = inprogress />
          <Category name = todo />
          <Category name = done />
        */}
      </div>
    </>
  )
}

export default App
