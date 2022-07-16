const skills = [
  { id: 123123, skill: 'HTML Canvas', learned: false },
  { id: 456456, skill: 'CSS Bootstrap', learned: false },
  { id: 789789, skill: 'JQuery', learned: false }
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
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 10000000;
  skill.learned = false;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

