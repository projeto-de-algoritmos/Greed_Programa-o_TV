import React, { useState, useEffect, useRef } from 'react';

function ProgramForm(props) {
  const [date, setDate] = useState(props.edit ? props.edit.value.date : '');
  const [time, setTime] = useState(props.edit ? props.edit.value.time : '');
  const [name, setName] = useState(props.edit ? props.edit.value.name : '');
  const [duration, setDuration] = useState(props.edit ? props.edit.value.duration : '');

  const inputRef = useRef(null);


  const handleSubmit = e => {
    e.preventDefault();

    if(date === '' || duration === '' || time === '' || name === '')
      return;
    console.log("####################### ", time)
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      date: date,
      duration: duration,
      time: time,
      name: name
    });
    setDate('');
    setDuration('');
    setTime('');
    setName('')
  };
	const form = (action) => {
		return(
			<div style={{display: 'flex', flexDirection:'column'}}>
        <div style={{display: 'flex', flexDirection:'row'}}>
          <input
            placeholder='Nome do programa'
            type='text'
            value={name}
            onChange={(e) => {setName(e.target.value); console.log(`NAME: ${e.target.value}`)}}
            name='name'
            className='program-input'
            style={{width:'100%'}}
          />
          <button onClick={handleSubmit} className='program-button' style={{marginTop:'auto', marginBottom:'auto'}}>
            {action}
          </button>
        </div>
        <div style={{display: 'flex'}}>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            name='date'
            className='program-input'
            style={{marginRigth: '200px'}}
            
          />
          <input
            label='Hora limite'
            type='time'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            name='text'
            className='program-input'
          />
          <input
            placeholder='Duração do programa'
            type='number'
            min='0'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            name='duration'
            className='program-input'
            style={{marginRigth: '200px'}}
          />
        </div>
			</div>
		);
	}

  return (
    <form onSubmit={handleSubmit} className='program-form'>
      {props.edit ? (
				form('Editar Programa')
      ) : (
				form('Adicionar programa')
      )}
    </form>
  );
}

export default ProgramForm;

