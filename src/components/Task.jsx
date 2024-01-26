
import '../styles/Task.css';
export default function Task({task}){
    const {name, category = 'todo'} = task;
    const categories = ['inprogress', 'todo', 'done']
    function handleClick(category)

    switch(category) {
        case 'todo':
            return (
                <>
                    <div className="task">
                        <h2>{name}</h2>
                        <button value = 'inprogress' onClick = {() => {handleClick(this.value)}}>in progress</button>
                        <button value = 'todo' className = 'hidden'>to do</button>
                        <button value = 'done' onClick = {() => {handleClick}}>done</button>
                    </div>
                </>
            );
        case 'inprogress':
            return (
                <>
                    <div className="task">
                        <h2>{name}</h2>
                        <button value = 'inprogress' className = 'hidden'>in progress</button>
                        <button value = 'todo' onClick = {() => {handleClick}}>to do</button>
                        <button value = 'done' onClick = {() => {handleClick}}>done</button>
                    </div>
                </>
            );
        case 'done':
            return (
                <>
                    <div className="task">
                        <h2>{name}</h2>
                        <button value = 'inprogress' onClick = {() => {handleClick}}>in progress</button>
                        <button value = 'todo' onClick = {() => {handleClick}}>to do</button>
                        <button value = 'done' className = 'hidden'>done</button>
                    </div>
                </>
            );
    }


    
}
