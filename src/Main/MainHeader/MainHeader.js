import React from 'react';
import styles from './MainHeader.module.css'
import Thermometr from '../../assets/thermometer.svg'
import Humidity from '../../assets/humidity.svg'
import Evaporator from '../../assets/evaporator.svg'
import Wind from '../../assets/wind.svg'
const MainHeader = ({current, isLight}) => {
    const addZero = (num) => {
        if (num < 10) return `0${num}`;
        else return num
    };

    const cityTime = () => {
        let d = new Date(),
            utc = d.getTime() + (d.getTimezoneOffset() * 60000),
            nd = new Date(utc + (1000 * current.timezone)),
            hours = addZero(nd.getHours()),
            minutes = addZero(nd.getMinutes());
        return `${hours} : ${minutes}`
    };

    return (
        <div className={styles.mainHeader}>

            <div className={`${styles.left} ${isLight ? styles.light : ''}`}>
                <div className={styles.leftTop}>
                    <div className={styles.leftTopLeft}>
                        <p className={styles.deg}>{(current.main.temp - 273.15).toFixed()}°</p>
                       <p className={styles.today}>Today</p>
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`} alt='icon weather'/>
                </div>
                    <p className={styles.infotext}>Time: {cityTime()} </p>
                    <p className={styles.infotext}>City: {current.name}</p>
            </div>

          <div className={`${styles.right} ${isLight ? styles.light : ''}`}>
              <ul className={styles.list} >
                  <li className={styles.item}>
                      <div className={styles.circle}>
                          <img src={Thermometr} alt={Thermometr}/>
                      </div>
                          <p className={styles.category}>Temperature</p>
                          <p className={styles.categoryValue}>{(current.main.temp - 273.15).toFixed()}°- feels like{(current.main.temp_min - 273.15).toFixed()}°</p>

                  </li>
                  <li className={styles.item}>
                      <div className={styles.circle}>
                          <img src={Humidity} alt={Humidity}/>
                      </div>
                          <p className={styles.category}>Pressure</p>
                          <p className={styles.categoryValue}>{current.main.pressure} mmHg - normal </p>

                  </li>
                  <li className={styles.item}>
                      <div className={styles.circle}>
                          <img src={Evaporator} alt={Evaporator}/>
                      </div>
                          <p className={styles.category}>Precipitation</p>
                          <p className={styles.categoryValue}>{current.weather[0].description}</p>

                  </li>
                  <li className={styles.item}>
                      <div className={styles.circle}>
                          <img src={Wind} alt={Wind}/>
                      </div>
                          <p className={styles.category}>Wind</p>
                          <p className={styles.categoryValue}>{(current.wind.speed).toFixed()} m/s </p>

                  </li>
              </ul>
          </div>




            </div>

    );
};

export default MainHeader;