const Proverbes = require('../Models/ProverbesModel')
const ProverbesChema = require('../Models/ProverbesModel')
module.exports = {
     getAllProverbes : async(req, res) => {
        try {
            const AllProverbes = await Proverbes.find().sort({createdAt: -1})
            res.status(202).json(AllProverbes)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    PostProverbe : async(req,res) => {
     const MesProverbesss = await new ProverbesChema(req.body)
    try {
        console.log("proverd")
        await MesProverbesss.save()
        res.status(202).json("Proverbes create Successsfuly")
    } catch (error) {
        res.status(500).json(error)
    }
    },

    getOneProduct : async(req, res)=> {
        const {id}= req.params.id
        try {
            const getOne = await Proverbes.findById(req.params.id)
            res.status(202).json(getOne)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    SearchProduct : async (req,res) => {
        try {
            const Proverbe = await Proverbes.aggregate(
                /*[
                    {
                      $search: {
                        index: "Proverbes",
                        text: {
                          query: req.params.key,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                  ]*/

                  [
                    {
                      $search: {
                        index: "default",
                        text: {
                          query: req.params.key,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                  ]
            )
            res.status(200).json(Proverbe)
        } catch (error) {
            res.status(500).json(error) 
        }
    }
}