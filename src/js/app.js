// TODO: write your code here

export default function health(obj) {
  if (obj.health >= 15 && obj.health <= 50) {
    return 'wounded';
  }

  if (obj.health < 15) {
    return 'critical';
  }

  return 'healthy';
}
