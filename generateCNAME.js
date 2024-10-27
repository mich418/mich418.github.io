import fs from 'fs'

if (fs.existsSync('./dist')) {
  fs.appendFileSync('./dist/CNAME', 'michal.dev', {flag: 'w'})
} else {
  throw new Error('Could not create CNAME file - dist dir does not exist.')
}
