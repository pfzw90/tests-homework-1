export default function getState({ name, health }) {
  const charStatus = { n: name, state: '' };
  if (health > 50) charStatus.state = 'healthy';
  else if (health >= 15 && health <= 50) charStatus.state = 'wounded';
  else charStatus.state = 'critical';
  return charStatus.state;
}
