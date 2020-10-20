import React, { useState } from 'react';
import ProgramForm from './ProgramForm';
import ProgramList from './ProgramList';

function Programmation() {
  const [programs, setProgramLists] = useState([]);

  const addProgramList = program => {
    const newProgramLists = [program, ...programs];

    setProgramLists(newProgramLists);
    console.log(...programs);
  };

  const updateProgram = (programId, newValue) => {
    setProgramLists(prev => prev.map(item => (item.id === programId ? newValue : item)));
  };

  const removeProgram = id => {
    const removedArr = [...programs].filter(program => program.id !== id);

    setProgramLists(removedArr);
  };

  return (
    <>
      <h1>Adicione os programas</h1>
      <ProgramForm onSubmit={addProgramList} />
      <ProgramList
        programs={programs}
        removeProgram={removeProgram}
        updateProgram={updateProgram}
      />
    </>
  );
}

export default Programmation;

