

import './app-info.css';

const AppInfo = ({emploees, rise}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {emploees}</h2>
            <h2>Премию получат: {rise}</h2>
        </div>
    )
};

export default AppInfo;