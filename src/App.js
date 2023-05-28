import './App.scss';
import LeftSide from './left.side.component/left.side';
import RightSide from './right.side.component/right.side';

function App() {
  return (
    <div className="App">
      <div className='left-right-sides'>
      <LeftSide />
      <RightSide />
      </div>
   </div>
  );
}

export default App;