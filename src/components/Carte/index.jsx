import '../../styles/Carte.scss';

function Carte({ titre, image }) {
  return (
    <figure className="figure-carte">
      <figcaption>{titre}</figcaption>
      <img src={image} alt={titre} />
    </figure>
  );
}

export default Carte;
