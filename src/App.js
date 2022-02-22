 import React, {useState, useEffect} from 'react';
 import axios from "axios";
import './style.css'
 import Header from "./Header/Header";
 import Main from "./Main/Main";
 import Form from "./Form/Form";
const App = () => {
    const [current, setCurrent] = useState({});
    const [fiveDays, setFiveDays] = useState([]);
    const [date, setDate] = useState('');
    const [isLight, setIsLight] = useState(false);

    function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        console.log('Geolocation is not supported by this browser')
    }
}

    function showPosition(position) {
    axios(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=9494035f5e5adda7fea0d37ef4f6010d`)
        .then(({data}) => setCurrent(data));

axios(`https://api.openweathermap.org/data/2.5/forecast?q=bishkek&appid=9494035f5e5adda7fea0d37ef4f6010d`)
    .then(({data}) => {
        setFiveDays (data.list);
    setDate(data.list[0].dt_txt.slice(0, 10))
    });

}
useEffect(() => {
    getLocation()
}, []);

  return (
      <div className={`app ${isLight ? 'light' : ''}`}>
          {JSON.stringify(current) !== '{}' ? <>
          <Header isLight={isLight} setIsLight={setIsLight} setDate={setDate} setFiveDays={setFiveDays} setCurrent={setCurrent}/>
          <Main isLight={isLight} current={current} fiveDays={fiveDays} setFiveDays={setFiveDays} date={date} setDate={setDate}/>

          </>
              : <div className='block-for-form'>
                  <Form isLight={isLight} setCurrent={setCurrent} setDate={setDate} setFiveDays={setFiveDays}/>
              </div>
          }
          </div>
  );



};


export default App;
