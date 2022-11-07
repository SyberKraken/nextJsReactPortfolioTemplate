const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use('/', (req, res) => {
    res.send( 
      `https://cdn.britannica.com/32/122932-050-43EE55D3/Elk.jpg
      https://cdn.britannica.com/03/94603-050-D74D3709/elk-American-Yellowstone-National-Park-Wyoming.jpg
      https://www.nps.gov/romo/learn/nature/images/Elk-Rut-Herd_Grossman.jpg
      https://upload.wikimedia.org/wikipedia/commons/a/aa/A._gigantea_Aldabra_Giant_Tortoise.jpg
      https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_03/3186216/200114-diego-tortoise-ew-634p.jpg`
    )
  });
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});