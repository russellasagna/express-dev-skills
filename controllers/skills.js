const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill
};

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    time: req.time,
  });
}

function show(req, res) {
  res.render("skills/show", { Skill: Skill.getOne(req.params.id) });
}

function newSkill(req, res) {
  res.render("skills/new");
}

function create(req, res) {
  console.log(req.body);
  //The model is responsible for creating data
  Skill.create(req.body);
  //Do a redirect anytime data is changed
  res.redirect("/skills");
}

function deleteSkill(req, res){
  Skill.deleteOne(req.params.id); 
  res.redirect('/skills');
}
