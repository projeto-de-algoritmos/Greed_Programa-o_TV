import React, { useState, useEffect, useRef } from 'react';

function ProgramForm(props) {
  const [date, setDate] = useState(props.edit ? props.edit.value.date : '');
  const [time, setTime] = useState(props.edit ? props.edit.value.time : '');
  const [duration, setDuration] = useState(props.edit ? props.edit.value.duration : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      date: date,
      duration: duration,
      time: time
    });
    setDate('');
    setDuration('');
    setTime('');
  };
	const form = (action) => {
		return(
			<div style={{display: 'flex'}}>
				<input
					type='date'
					value={date}
					onChange={(e) => setDate(e.target.value)}
					name='date'
					className='program-input'
					ref={inputRef}
					style={{marginRigth: '200px'}}
				/>
				<input
					label='Hora limite'
					type='time'
					value={time}
					onChange={(e) => setTime(e.target.value)}
					name='text'
					className='program-input'
					ref={inputRef}
				/>
				<input
					placeholder='Duração do programa'
					type='number'
					min='0'
					value={duration}
					onChange={(e) => setDuration(e.target.value)}
					name='duration'
					className='program-input'
					ref={inputRef}
					style={{marginRigth: '200px'}}
				/>
				<button onClick={handleSubmit} className='program-button'>
					{action}
				</button>
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

