const fs = require('fs')

if (fs.existsSync('./dist')) {
  fs.appendFileSync('./dist/CNAME', 'mihau.co', {flag: 'w'})
} else {
  throw new Error('Could not create CNAME file - dist dir does not exist.')
}