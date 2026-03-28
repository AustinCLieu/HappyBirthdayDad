function Welcome({ onNext }) {
  return (
    <div>
      <h1>Incoming transmission. Identify yourself, Commander.</h1>
      <button onClick={onNext}>Begin</button>
    </div>
  )
}

export default Welcome
