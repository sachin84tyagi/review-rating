const { Sequelize } = require('sequelize');
const cors = require("cors");
const express = require("express");
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
  };
  
  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
// Option 1: Passing a connection URI
//const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('dvdrental', 'postgres', 'Adcvr1985', {
  host: 'localhost',
  dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});


async function getStaffData(email = 'Mike.Hillyer@sakilastaff.com') {
  const queryData =  await sequelize.query("SELECT * FROM staff WHERE email= :in_email", 
  { 
    replacements: {
      in_email: email
    },
    type: sequelize.QueryTypes.SELECT 
  });
  return queryData || []
}

async function getActorData() {
    const queryData =  await sequelize.query("SELECT * FROM actor", 
    {
      type: sequelize.QueryTypes.SELECT 
    }
    );
    return queryData || []
}

async function getContactsData() {
  const queryData =  await sequelize.query(`SELECT * FROM public.test_contacts ORDER BY id ASC`, 
  {
    type: sequelize.QueryTypes.SELECT
  }
  );
  return queryData || []
}

async function insertContactsData(reqBody) {
  const { name, mobile, email, address } = reqBody
  const search_string = `${name}|${mobile}|${email}|${address}`
  const queryData =  await sequelize.query(`INSERT INTO public.test_contacts(name, mobile, email, address, search_string)
    VALUES (:in_name, :in_mobile, :in_email, :in_address, :in_search_string)`, 
      {
        type: sequelize.QueryTypes.INSERT,
        replacements: {
          in_name: name,
          in_mobile: mobile,
          in_email: email,
          in_address: address,
          in_search_string: search_string
          }
      }
    );
  return queryData || []
}

async function updateContact(id, reqBody) {
  const { name, mobile, email, address } = reqBody
  const search_string = `${name}|${mobile}|${email}|${address}`
  const queryData =  await sequelize.query(`UPDATE public.test_contacts SET name=:in_name, mobile=:in_mobile, email=:in_email, address=:in_address, search_string=:in_search_string
    WHERE id=:in_id`, 
      {
        type: sequelize.QueryTypes.UPDATE,
        replacements: {
          in_id: id,
          in_name: name,
          in_mobile: mobile,
          in_email: email,
          in_address: address,
          in_search_string: search_string
        }
      }
    );
  return queryData || []
}

async function deleteContact(id) {
  const queryData =  await sequelize.query("DELETE FROM public.test_contacts WHERE id = :in_id", 
  {
    type: sequelize.QueryTypes.DELETE,
    replacements: {
        in_id: id
    }
  }
  );
  return queryData || []
}

  // simple route
app.get("/staff", async(req, res) => {
  const queryData = await getStaffData()
  res.json({ staff: queryData });
});

app.get("/contacts", async(req, res) => {
  const queryData = await getContactsData()
  res.json({ contacts: queryData });
});

app.post("/contacts", async(req, res) => {
  const queryData = await insertContactsData(req.body)
  res.json({ contacts: queryData });
});

app.delete("/contacts/:id", async(req, res) => {
  const {id} = req.params
  const queryData = await deleteContact(id)
  res.json({ contacts: queryData });
});

app.put("/contacts/:id", async(req, res) => {
  const {id} = req.params
  const queryData = await updateContact(id, req.body)
  res.json({ contacts: queryData });
});

app.get("/actor", async(req, res) => {
  const queryData = await getActorData()
  res.json({ staff: queryData });
});
  
  // set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});