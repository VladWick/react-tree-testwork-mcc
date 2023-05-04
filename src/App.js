import './App.css';

import Header from './components/Header';
import TreeList from './components/Tree/TreeList';

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header header="Tree" />
                <TreeList />
            </div>
        </div>
    );
}

export default App;