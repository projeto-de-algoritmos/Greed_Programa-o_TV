import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ResultList = ({ programmation, dayFilter, monthFilter, yearFilter}) => {
	if(programmation.lenght === 0 || dayFilter === '' || monthFilter === '' || yearFilter === '')
		return(null);
	console.log('passou if');
	let result = [];
	programmation.forEach(item => {
		console.log('dayFilter', dayFilter)
		console.log('monthFilter', monthFilter)
		console.log('yearFilter', yearFilter)
		console.log('startDate', item.start.getDate())
		console.log('startMonth', item.start.getMonth())
		console.log('startYear', item.start.getFullYear())
    console.log('TimeHours', item.start.getHours())
    console.log('TimeMins', item.start.getMinutes())
    const startHour = (item.start.getHours() < 10 ? '0':'')+item.start.getHours()
    const startMinute = (item.start.getMinutes() < 10 ? '0':'')+item.start.getMinutes()
    const endHour = (item.end.getHours() < 10 ? '0':'')+item.end.getHours()
    const endMinutes = (item.end.getMinutes() < 10 ? '0':'')+item.end.getMinutes()
		if(item.start.getDate() == dayFilter && item.start.getMonth() + 1 == monthFilter && item.start.getFullYear() == yearFilter)

      if(item.start.getDate() == item.end.getDate() && item.start.getMonth() == item.end.getMonth())
        result = [...result, `${startHour}:${startMinute} | ${endHour}:${endMinutes} - ${item.name}`]
      else
        result = [...result, `${startHour}:${startMinute} | 23:59 - ${item.name}`]

		else if(item.end.getDate() == dayFilter && item.end.getMonth() + 1 == monthFilter && item.end.getFullYear() == yearFilter)
			result = [...result, `00:00 | ${endHour}:${endMinutes} - ${item.name}`]
    else if(item.end.getDate() > dayFilter && item.start.getDate() < dayFilter)
      result = [...result, `00:00 | 23:59 - ${item.name}`]

	})
	console.log('result', result)
  return result.map((time, index) => (
    <div className={'program-row'}>
			<div>
				{time}
			</div>
    </div>
	));
};

export default ResultList;

