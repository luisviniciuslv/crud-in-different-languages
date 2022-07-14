const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);
const database = client.db("mongobands");
const collection = database.collection("colecaoBandas");

async function Create() {
  const doc = {
    nome: "AC/DC",
    type: "rock",
  };

  const result = await collection.insertOne(doc);
  console.log(`A document was inserted with the _id: ${result.insertedId}`);
}

async function Read() {
  querry = { nome: "Metallica" };
  const band = await collection.findOne(querry);
  console.log(band);
}

async function Update() {
  const filter = { nome: "Metallica" };
  const options = { upsert: true };
  const updateDoc = {
    $set: {
      nome: "Linkin Park",
    },
  };
  const result = await collection.updateOne(filter, updateDoc, options);
  console.log(`Metallica updated to Linkin Park`);
}

async function Delete() {
  const query = { nome: "AC/DC" };
  const result = await collection.deleteOne(query);
  if (result.deletedCount === 1) {
    console.log("Successfully deleted one document.");
  }
}

Read();
