import React, { useState, useEffect } from 'react';

const URL_TEAMS = 'http://localhost:3004/teams';

const Poll = () => {
  const [pollTeams, setPollTeams] = useState([]);

  const fetchPoll = () => {
    fetch(`${URL_TEAMS}?poll=true&_sort=count&_order=desc`, { method: 'GET' })
      .then(response => response.json())
      .then(teams => {
        setPollTeams(teams);
      });
  };

  useEffect(() => {
    fetchPoll();
  }, []);

  const addCount = (count, id) => {
    fetch(`${URL_TEAMS}/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ count: count + 1 })
    }).then(() => {
      fetchPoll();
    });
  };

  const renderPoll = () => {
    const positions = ['1ST', '2ND', '3RD'];

    return pollTeams.map((item, index) => (
      <div
        key={item.id}
        className="poll_item"
        onClick={() => addCount(item.count, item.id)}
      >
        <img alt={item.name} src={`/images/teams/${item.logo}`} />
        <h4>{positions[index]}</h4>
        <div>{item.count} Votes</div>
      </div>
    ));
  };

  return (
    <div className="home_poll">
      <h3>Who will be the next champion ?</h3>
      <div className="poll_container">{renderPoll()}</div>
    </div>
  );
};

export default React.memo(Poll);
