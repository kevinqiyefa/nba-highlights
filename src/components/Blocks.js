import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal/Reveal';

const generateBlocks = ({ blocks }) => {
  if (blocks) {
    return blocks.map(item => (
      <div key={item.id} className={`item ${item.type}`}>
        <Reveal
          effect="fadeInUp"
          delay={item.type === 'lg' ? 200 : item.type === 'md' ? 500 : 800}
        >
          <div className="veil" />
          <div
            className="image"
            style={{
              background: `url(/images/blocks/${item.image}) no-repeat`
            }}
          />
          <div className="title">
            <Link to={item.link}>{item.title}</Link>
          </div>
        </Reveal>
        \
      </div>
    ));
  }
};

const Blocks = props => {
  return <div className="home_blocks">{generateBlocks(props)}</div>;
};

export default Blocks;
