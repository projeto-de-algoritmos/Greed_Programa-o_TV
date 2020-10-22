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
		if(item.start.getDate() == dayFilter && item.start.getMonth() + 1 == monthFilter && item.start.getFullYear() == yearFilter)
			result = [...result, `${item.start.getHours()}:${item.start.getMinutes()} ~ ${item.end.getHours()}:${item.end.getMinutes()}`]
		else if(item.end.getDate() == dayFilter && item.end.getMonth() + 1 == monthFilter && item.end.getFullYear() == yearFilter)
			result = [...result, `${item.start.getHours()}:${item.start.getMinutes()} ~ ${item.end.getHours()}:${item.end.getMinutes()}`]

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

