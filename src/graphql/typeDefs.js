const { gql } = require("apollo-server-express");

module.exports = gql`
  type Pasien {
    id: Int
    nama: String
    tanggal_lahir: String
  }

  type Resep {
    id: ID!
    obat_id: Int
    nakes_id: Int
    pasien_id: Int
    kunjungan_id: Int
    deskripsi: String
    dosis: String
    pasien: Pasien
  }

  type Query {
    reseps: [Resep]
  }

  type Mutation {
    createResep(obat_id: Int!, nakes_id: Int!, pasien_id: Int!, kunjungan_id: Int!, deskripsi: String, dosis: String): Resep
  }
`;
