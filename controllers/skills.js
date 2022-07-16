const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill
};

function index(req, res) {
  const sks = Skill.getAll();
  res.render("skills/index", { sks });
}

function show(req, res) {
  const sk = Skill.getOne(req.params.id);
  res.render("skills/show", { sk });
}

function newSkill(req, res) {
  res.render("skills/new");
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect("/skills");
}

function deleteSkill(req, res){
  Skill.deleteOne(req.params.id); 
  res.redirect('/skills');
}
