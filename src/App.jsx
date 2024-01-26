import './styles/App.css';
import Task from './components/Task';
import CategoryManager from './components/CategoryManager.jsx';
function App() {
  const dtoIn = [{name:'todo1', category:'todo'},
                 {name:'inprogress1', category:'inprogress'},
                 {name:'done1', category:'done'},
                 {name:'failed', category: 'wrong'},
                ];
                console.log(typeof(dtoIn))
  return (
    <>
      <div className = 'inputDiv'>
        {/* <Input/> */}
      </div>
      <div className='categoriesDiv'>
        {/* <Task task = {{name:'test', category:'todo'}} /> */}
        <CategoryManager tasks = {dtoIn} />
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
