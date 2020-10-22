import React, { useState } from 'react';
import ProgramForm from './ProgramForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ProgramList = ({ programs, removeProgram, updateProgram }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateProgram(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <ProgramForm edit={edit} onSubmit={submitUpdate} />;
  }

  return programs.map((program, index) => (
    <div
			style={{marginLeft: 'auto', marginRight: 'auto'}}
      className={'program-row'}
      key={program.id}
    >
      <div style={{display: 'flex', justifyContent: 'space-between', flex: '5', marginRight: '30px'}}key={program.id}>
				<div>
					{`${program.date.split('-')[2]}/${program.date.split('-')[1]}/${program.date.split('-')[0]}`}
				</div>
				<div>
					{program.time}
				</div>
				<div>
					{program.duration}
				</div>
      </div>
      <div className='icons' style={{flex: 1}}>
        <RiCloseCircleLine
          onClick={() => removeProgram(program.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: program.id, value: {date: program.date, time: program.time, duration: program.duration} })}
          className='edit-icon' style={{flex: 1}}
        />
      </div>
    </div>
  ));
};

export default ProgramList;

