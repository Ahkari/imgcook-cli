// 过滤数组重复项
exports.unique = array => {
  return array
    .concat()
    .sort()
    .filter((item, index, arr) => {
      return !index || item !== arr[index - 1];
    });
};
