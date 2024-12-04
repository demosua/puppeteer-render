function cleanData(rawData) {
  return rawData.map(item =>
    item
      .replace(/\n\t+/g, ' ')
      .split('З ')
      .filter(Boolean)
      .map(entry => entry.trim())
  );
}

module.exports = { cleanData };