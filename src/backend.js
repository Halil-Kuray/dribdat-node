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
router.get('/project', async (req, res) => {
    try {
      const user_provided_url = req.query.url;
      const use_simple_format = req.query.simple == '1';
      console.log(req.query)
      fetchData(user_provided_url).then((results) => {
        if (use_simple_format) {
            results = {
                'location': results.event.location,
                'teamname': results.project.name
            }
        }
        res.status(200).send(results)
    }).catch((reason) => {
        res.status(500).send(reason)
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