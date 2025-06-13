const Resep = require("../../models/Resep");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  Query: {
    reseps: async () => await Resep.findAll(),
  },
  Resep: {
    pasien: async (parent) => {
      try {
        const res = await fetch("http://localhost:8003/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query {
                pasien(id: ${parent.pasien_id}) {
                  id
                  nama
                  tanggal_lahir
                }
              }
            `,
          }),
        });

        const data = await res.json();
        return data.data.pasien;
      } catch (error) {
        console.error("❌ Gagal fetch data pasien:", error);
        return null;
      }
    },
  },
  Mutation: {
    createResep: async (_, args) => {
      return await Resep.create(args);
    },
  },
};
