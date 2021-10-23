import React, {useContext} from 'react';
import { StyledTaskSettings } from './styled/StyledTaskSettings';
import { TasksContext } from '../context/tasks.context';

function TaskSettings() {
    const { taskDispatch, isSettingsDisplayed, setIsSettingsDisplayed } = useContext(TasksContext);

    const handleOptionClick = (e) => {
        if (e.target.value === 'clear-finished') {
            taskDispatch({ type: 'CLEAR-FINISHED' });
        }
        if (e.target.value === 'clear-pomodoros') {
            taskDispatch({ type: 'CLEAR-POMODOROS' });
        }
        if (e.target.value === 'clear-all') {
            taskDispatch({ type: 'CLEAR-ALL' });
        }
        setIsSettingsDisplayed(false);
    }
    return (
        <StyledTaskSettings className='TaskSettings' display={isSettingsDisplayed}>
            <option className='TaskSettings-option TaskSettings-option-1'
                onClick={handleOptionClick} value="clear-finished">Clear Finished Tasks</option>
            <option className='TaskSettings-option TaskSettings-option-2'
                onClick={handleOptionClick} value="clear-pomodoros">Clear Pomodoros</option>
            <option className='TaskSettings-option TaskSettings-option-3'
                onClick={handleOptionClick} value="clear-all">Clear All Tasks</option>
        </StyledTaskSettings>
    )
}

export default TaskSettings;
