const { writeFile, readFile } = require('node:fs/promises');

module.exports = {
  read: async (path) => {
    return await readFile(path);
  },
  write: async (path, content) => {
    await writeFile(path, content);
  },
};
