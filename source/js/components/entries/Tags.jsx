import React from 'react';

// Single tag builder
function Tag (props) {
  return <span>{props.tag}</span>;
}

class Tags extends React.Component {
  render() {

    // Build Tag List
    const tagList = this.props.tags;
    const allTags = tagList.map((tag, i) => (
      <Tag tag={tag} key={tag.toString()} />
    ));

    // Return All Taggs
    return (
      <div className="btns tags">{allTags}</div>
    );
  }
}

export default Tags;
