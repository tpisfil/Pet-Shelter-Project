const Pet = require("../models/pet.model")

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => {
            res.json({results: allPets})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.createNewPet = (req,res) => {
    Pet.create(req.body )
    .then(newPet => {
        res.json({results: newPet})
    })
    .catch(err => {
        res.json({err: err})
    })
}

module.exports.findOnePet = (req,res) => {
    Pet.findOne({_id:req.params.id})
    .then(onePet => {
        res.json({results: onePet});
    })
    .catch(err => {
        res.json({err: err})
    }) 
}

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
    .then(updatedPet => {
        res.json({ results: updatedPet });
    })
    .catch(err => {
        res.json({err: err}) 
    });
}

module.exports.deletePet = (req,res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(deletedPet => {
        res.json({results: deletedPet});
    })
    .catch(err => {
        res.json({err: err}) 
    });
}