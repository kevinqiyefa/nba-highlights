import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const URL_TEAMS = 'http://localhost:3004/teams';

function Teams() {
  const [keyword, setKeyword] = useState('');
  const [teams, setTeams] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const searchTeam = e => {
    setKeyword(e.target.value);
  };

  const fetchTeamsData = () => {
    fetch(URL_TEAMS, { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        setTeams(data);
        setFiltered(data);
      });
  };

  useEffect(() => {
    fetchTeamsData();
  }, []);

  const renderList = () => {
    return filtered.map(item => (
      <CSSTransition key={item.id} timeout={500} classNames="team">
        <Link to={`/team/${item.name}`} className="team_item">
          <img alt={item.name} src={`/images/teams/${item.logo}`} />
        </Link>
      </CSSTransition>
    ));
  };

  return (
    <div className="teams_component">
      <div className="teams_input">
        <input
          type="text"
          value={keyword}
          onChange={e => searchTeam(e)}
          placeholder="Search for a Team"
        />
      </div>
      <div className="teams_container">
        <TransitionGroup>{renderList()}</TransitionGroup>
      </div>
    </div>
  );
}

export default Teams;
