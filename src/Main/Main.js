import React from 'react';
import MainHeader from "./MainHeader/MainHeader";
import MainFooter from "./MainFooter/MainFooter";

const Main = ({current, fiveDays, date, setDate, isLight}) => {



    return (
        <section>
            <div className='container'>

                     <MainHeader isLight={isLight} current={current}/>
                     <MainFooter isLight={isLight} fiveDays={fiveDays} date={date} setDate={setDate}/>
            </div>
        </section>
    );
};

export default Main;