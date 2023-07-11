import './App.css';
import { LessonButton } from './components/LessonButton';
import { LessonCard } from './components/LessonCard';
import { LessonSelect } from './components/LessonSelect';
import { LessonSwitch } from './components/LessonSwitch';
import { LessonTextField } from './components/LessonTextField';
import { LessonTypography } from './components/LessonTypography';

function App() {
  return (
    <div className="App">
      {/* <LessonTypography /> */}
      {/* <LessonButton /> */}
      {/* <LessonTextField /> */}
      {/* <LessonSelect /> */}
      {/* <LessonCard /> */}
      <LessonSwitch />
    </div>
  );
}

export default App;
