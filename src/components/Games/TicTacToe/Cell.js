export const Cell = ({ num, winner, cells, handleClick }) => {
  return (
    <td onClick={() => !winner && handleClick(num)} style={{ border: '5px solid white', width: 200, height: 200, textAlign: 'center', fontSize: 60 }}>
      {cells[num]}
    </td>
  );
};
