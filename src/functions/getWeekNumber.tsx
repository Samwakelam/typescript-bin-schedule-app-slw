// packages
// import React from 'react'; 


export const getWeekNumber = (date : Date) : number => {

    const todayDate : any = new Date(date); 
    const firstJan : any = new Date(todayDate.getFullYear(), 0, 1);
    const numDays = Math.floor((todayDate - firstJan)/(24*60*60*1000)); 

    const weekNumber : number = Math.ceil((todayDate.getDay() + 1 + numDays) / 7);

    console.log('todayDate =', todayDate); 
    console.log('firstJan =', firstJan);
    console.log('numDays =', numDays); 
    console.log('weekNumber =', weekNumber); 

    return weekNumber;
}
