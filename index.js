var concat = require('concat-image');
var fs     = require('fs');
var logger = require('winston');

logger.info('Reading input images');
concat({
  images: [
    fs.readFileSync('./sample/positive.png'),
    fs.readFileSync('./sample/negative.jpg')
  ],
  margin: 0
}, function(err, canvas) {
  fs.writeFileSync('./output/out.png', canvas.toBuffer());
  logger.info('Finished writing to ouput folder');
});
