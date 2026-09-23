const fs = require('fs');
const path = require('path');
const https = require('https');

const dirs = [
  'public/logos',
  'public/slide_images',
  'public/uploads/page_images',
  'public/uploads/notice_images'
];

dirs.forEach(d => fs.mkdirSync(path.join(__dirname, d), { recursive: true }));

const filesToDownload = [
  { url: 'https://www.aposh.org/logos/aposh_logo.png', dest: 'public/logos/aposh_logo.png' },
  ...Array.from({length: 13}, (_, i) => ({
    url: `https://www.aposh.org/slide_images/slide_${i+1}.jpg`,
    dest: `public/slide_images/slide_${i+1}.jpg`
  })),
  ...Array.from({length: 12}, (_, i) => ({
    url: `https://www.aposh.org/uploads/page_images/image_${i+1}.jpg`,
    dest: `public/uploads/page_images/image_${i+1}.jpg`
  })),
  ...[1, 2, 7, 13].map(i => ({
    url: `https://www.aposh.org/uploads/notice_images/image_${i}.jpg`,
    dest: `public/uploads/notice_images/image_${i}.jpg`
  }))
];

filesToDownload.forEach(file => {
  const destPath = path.join(__dirname, file.dest);
  https.get(file.url, (res) => {
    if(res.statusCode === 200) {
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${file.dest}`);
      });
    } else {
      console.error(`Failed to download: ${file.url} - Status: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading: ${file.url} - ${err.message}`);
  });
});
