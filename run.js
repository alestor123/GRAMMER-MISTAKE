const grammer = require('./App');
(async () => {
  const data = await grammer('This is aawesome')
  console.log(await data)
})()
