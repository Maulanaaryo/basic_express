const express = require("express"); // require('express') untuk menggunakan package dan masukan ke variabel express
const app = express(); // mengimport untuk menjadi variabel agar bisa dipanggil method nya.
const port = 3000; // landasan, 3000 defaultnya

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
