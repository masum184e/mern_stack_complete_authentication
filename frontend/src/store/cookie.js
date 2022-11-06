const setToken=(value)=>{
  const d = new Date();
  d.setTime(d.getTime() + (5 * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = "asdfsdafas=" + value + ";" + expires + ";path=/";
}
const getToken=()=>{
  let name = "asdfsdafas=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
const removeToken=()=>{
  const d = new Date();
  d.setTime(d.getTime() + (-5 * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = "asdfsdafas=;" + expires + ";path=/";
}

export { setToken,getToken,removeToken }