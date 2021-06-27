import { useHistory } from 'react-router-dom';

const SongTableRow = ({ id, el, handleDeleteSong }) => {
  let history = useHistory();
  console.log(el);
  return (
    <tr>
      <td>
        <img src="https://placeimg.com/40/40/animals" alt="" />
      </td>
      <td>Nombre artista</td>
      <td>Nombre de la cancion</td>
      <td>
        <button onClick={() => history.push(`/canciones/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
