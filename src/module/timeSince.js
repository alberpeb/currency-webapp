export const timeSince = (date) => {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return "hace " + interval + " años";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return "hace " + interval + " meses";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return "hace " + interval + " dias";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return "hace " + interval + " horas";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return "hace " + interval + " minutos";
  }
  interval = Math.floor(seconds / 10);
  if (interval > 1) {
    return "hace " + interval + " segundos";
  }
  return " ahora";
}