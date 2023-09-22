export default function Button() {
  function handleClick() {
    alert('hello')
  }
  return (
  <button onClick={handleClick}>
    I don't do anything
  </button>
  )
}