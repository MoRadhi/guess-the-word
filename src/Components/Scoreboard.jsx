const Scoreboard = ({ round, wins }) => {
  return (
    <div className="scoreboard">
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Total Wins</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{round}</td>
            <td>{wins}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
