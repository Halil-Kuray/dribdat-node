import express from 'express' 
import { fetchData } from "./dribdat.js"

var app = express();

app.use(express.json());

// Enable Cors
// import cors from 'cors'
// app.use(cors());

const PORT = process.env.PORT || 8081;

const router = express.Router();

// Get basic dribdat info
router.get('/project/:url', async (req, res) => {
    try {
      const user_provided_url = req.params.url
      fetchData(user_provided_url).then((results) => {
        res.status(200).send(results)
      })
    } catch (err) {
      console.error(err)
      res.status(500).send('Error fetching project')
    }
  });

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});