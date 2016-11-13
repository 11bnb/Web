import React from 'react';
import './index.less';

const ACTIVITYTYPEItem = ({ data }) => {
  const { activity } = data;
  return (
    <section className="activity" id={activity.activity_id}>
      <div className="image">
        <img src={`${activity.images[0].image_url}_750`} alt={activity.title} />
      </div>
      <div className="contents">
        <div className="title">{activity.title}</div>
        <div className="subtitle">{activity.sub_title}</div>
      </div>
    </section>
  )
};

export default ACTIVITYTYPEItem;
