const Koa = require('koa');
const app = new Koa; 

const PORT = 3000;

app.use((ctx) => ctx.body = 'Hello World');

app.listen(PORT, ()=> console.log(`Server is listening on port: ${PORT}`));