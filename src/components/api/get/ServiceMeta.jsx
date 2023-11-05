export function getServiceMeta(metaObject) {
  let filteredMetaArray = [];
  for (const [key, value] of Object.entries(metaObject)) {
    if (value) {
      filteredMetaArray.push(key);
    }
  }
  return filteredMetaArray.length !== 0
    ? filteredMetaArray.toString().replaceAll(",", ", ")
    : "None available";
}
