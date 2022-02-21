const app = require("./server");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening On port ${PORT}`);
});
