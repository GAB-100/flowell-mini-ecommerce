import { extname } from 'path';

export const generateRandomFileName = (req, file, cb) => {
  const randomName = Array(32)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  return cb(null, `${randomName}${extname(file.originalname)}`);
};
