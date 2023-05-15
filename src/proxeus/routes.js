import express from 'express';
import { fetchData } from "../dribdat";

const router = express.Router();


// Get basic dribdat info
router.get('/test', async (req, res) => {
    try {
      const user_provided_url = 'https://bd.hack4socialgood.ch/project/75';
      let books = fetchData(user_provided_url)
      res.status(200).send(books);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching books');
    }
  });

module.exports = router;

