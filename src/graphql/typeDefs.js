const { gql } = require("apollo-server-express");

module.exports = gql`
  type Resep {
    id: ID!
    obat_id: Int
    nakes_id: Int
    pasien_id: Int
    kunjungan_id: Int
    deskripsi: String
    dosis: String
  }

  type Query {
    reseps: [Resep]
  }

  type Mutation {
    createResep(obat_id: Int!, nakes_id: Int!, pasien_id: Int!, kunjungan_id: Int!, deskripsi: String, dosis: String): Resep
  }
`;
