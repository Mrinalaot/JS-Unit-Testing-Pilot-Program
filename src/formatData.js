module.exports = function formatData(data) {
  // validations
  if (!data) return;
  if (!Array.isArray(data)) return;
  if (!data.length) return;

  // transformation
  data = data.map((item) => ({
    name: item.name || "default name",
    value: item.value || 0,
  }));

  // filter the items with value less than 1000
  data = data.filter(
    (item) => item.value < 1000
  );
  return data;
}
