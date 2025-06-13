const Resep = require("../../models/Resep");

module.exports = {
  Query: {
    reseps: async () => await Resep.findAll(),
  },
  Mutation: {
    createResep: async (_, args) => {
      return await Resep.create(args);
    },
  },
};
