function Peli({ peli }) {
  return (
    <div>
      <h3>{peli.Title}</h3>
      <img src={peli.Poster} alt={peli.Title} />
    </div>
  );
}

export default Peli;
