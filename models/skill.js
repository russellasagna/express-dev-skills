const skills = [
    {id: 125223, skill: 'Feed Dogs', done: true},
    {id: 127904, skill: 'Learn Express', done: false},
    {id: 139608, skill: 'Buy Milk', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne, 
    create, 
    deleteOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function create(skill){
    console.log('this is first skill...', skill);
    skill.id = Date.now() % 10000000;
    skill.done = false; 
    skills.push(skill);
    console.log('this is last skill...', skill); 
  }

  function deleteOne(id){
    const idx = skills.findIndex(
      skill => skill.id === parseInt(id)); 
      skills.splice(idx, 1); 
  }

