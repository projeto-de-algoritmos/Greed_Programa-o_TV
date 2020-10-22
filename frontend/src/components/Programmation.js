import React, { useState, useEffect, useRef } from 'react';
import ProgramForm from './ProgramForm';
import ResultList from './ResultList';
import ProgramList from './ProgramList';
import greed from '../util/greedAlgorithm'

function Programmation() {
  const [programs, setPrograms] = useState([]);
	const [programmation, setProgrammation] = useState([]);
  const [dateFilter, setDateFilter] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const addProgramList = program => {
    const newProgramLists = [program, ...programs];

    setPrograms(newProgramLists);
    console.log(...programs);
  };

  const updateProgram = (programId, newValue) => {
    setPrograms(prev => prev.map(item => (item.id === programId ? newValue : item)));
  };

  const removeProgram = id => {
    const removedArr = [...programs].filter(program => program.id !== id);

    setPrograms(removedArr);
  };
	const calcButton = () => {
		if(programs.length !== 0)
			return(
				<button className='program-button' onClick={() => setProgrammation(greed(programs))}>
					Calcular programação
				</button>
			);
		return(null);
	}

  return (
		<div style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap'}}>
			<div style={{width: '700px'}}>
				<h1>Adicione os programas</h1>
				<ProgramForm onSubmit={addProgramList} />
				<ProgramList
					programs={programs}
					removeProgram={removeProgram}
					updateProgram={updateProgram}
				/>
				{calcButton()}
			</div>
			<div style={{display: 'flex', flex: '1', flexDirection: 'column'}}>
				<h1>Lista da programação</h1>
				<input
					type='date'
					value={dateFilter}
					onChange={(e) => setDateFilter(e.target.value)}
					name='date'
					className='program-input'
					ref={inputRef}
					style={{marginLeft: 'auto', marginRight: 'auto'}}
				/>
				<ResultList dayFilter={dateFilter.split('-')[2]} monthFilter={dateFilter.split('-')[1]} yearFilter={dateFilter.split('-')[0]} programmation={programmation}/>
			</div>
		</div>
  );
}

export default Programmation;

