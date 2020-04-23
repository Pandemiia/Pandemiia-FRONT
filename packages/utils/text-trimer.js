export default (str = '', length = 100, ending = '...') =>
  str.length > length ? str.substring(0, length - ending.length) + ending : str;
