import React, { useState, useEffect } from 'react';

const URL_TEAMS = 'http://localhost:3004/teams';

function Team(props) {
  const [team, setTeam] = useState([]);

  const renderSquad = squad => {
    return squad.map(item => {
      return (
        <div key={item.name} className="item player_wrapper">
          <img alt={item.name} src={`/images/avatar.png`} />
          <h4>{item.name}</h4>
          <div className="node">
            <span>Number:</span>
            {item.number}
          </div>
          <div className="node">
            <span>PPG:</span>
            {item.PPG}
          </div>
          <div className="node">
            <span>APG:</span>
            {item.APG}
          </div>
          <div className="node">
            <span>RPG:</span>
            {item.RPG}
          </div>
        </div>
      );
    });
  };

  const renderTeam = teamData => {
    return teamData.map(item => (
      <div key={item.name} className="team_data_wrapper">
        <div className="left">
          <img alt={item.name} src={`/images/teams/${item.logo}`} />
        </div>
        <div className="right">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <hr />
          <div className="squad">{renderSquad(item.squad)}</div>
        </div>
      </div>
    ));
  };

  const fetchData = () => {
    fetch(`${URL_TEAMS}?name=${props.match.params.name}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setTeam(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="team_data">{renderTeam(team)}</div>;
}

export default Team;
