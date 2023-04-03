export default function createTimer(name, description) {
  return {
    name,
    description,
    time: 0,
    isRunning: false
  }
}
