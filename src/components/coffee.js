function Coffee(props) {
  return (
    <div className="coffee">
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </div>
  );
}

export default Coffee;
