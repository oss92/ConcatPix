var concat = require('concat-image');
var fs     = require('fs');

concat({
  images: [
    fs.readFileSync('./sample/positive.png'),
    fs.readFileSync('./sample/negative.jpg')
  ],
  margin: 0
}, function(err, canvas) {
  fs.writeFileSync('./output/out.png', canvas.toBuffer());
});
