import React, { useState, useEffect, useRef } from 'react';

function ProgramForm(props) {
  const [date, setDate] = useState(props.edit ? props.edit.value.date : '');
  const [time, setTime] = useState(props.edit ? props.edit.value.time : '');
  const [duration, setDuration] = useState(props.edit ? props.edit.value.duration : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChangeDate = e => {
    setDate(e.target.value);
  };
  const handleChangeTime = e => {
    setTime(e.target.value);
  };
  const handleChangeDuration = e => {
    setDuration(e.target.value);
  };

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

  return (
    <form onSubmit={handleSubmit} className='program-form'>
      {props.edit ? (
        <div style={{display: 'flex'}}>
          <input
						type='date'
            value={date}
            onChange={handleChangeDate}
            name='date'
            className='program-input'
            ref={inputRef}
						style={{marginRigth: '200px'}}
          />
          <input
						label='Hora limite'
						type='time'
            value={time}
            onChange={handleChangeTime}
            name='text'
            className='program-input'
            ref={inputRef}
          />
          <input
						placeholder='Duração do programa'
						type='number'
            value={duration}
            onChange={handleChangeDuration}
            name='duration'
            className='program-input'
            ref={inputRef}
						style={{marginRigth: '200px'}}
          />
          <button onClick={handleSubmit} className='program-button'>
						Editar Programa
          </button>
        </div>
      ) : (
        <div style={{display: 'flex'}}>
          <input
						type='date'
            value={date}
            onChange={handleChangeDate}
            name='date'
            className='program-input'
            ref={inputRef}
						style={{marginRigth: '200px'}}
          />
          <input
						type='time'
            value={time}
            onChange={handleChangeTime}
            name='text'
            className='program-input'
            ref={inputRef}
          />
          <input
						placeholder='Duração do programa'
						type='number'
            value={duration}
            onChange={handleChangeDuration}
            name='duration'
            className='program-input'
            ref={inputRef}
						style={{marginRigth: '200px'}}
          />
          <button onClick={handleSubmit} className='program-button'>
						Adicionar programa
          </button>
        </div>
      )}
    </form>
  );
}

export default ProgramForm;

