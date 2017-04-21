import React from 'react';

// Single tag builder
class Tag extends React.Component {
  render() {
    return (
      <span className={this.props.active ? 'active': null}>{this.props.tag}</span>
    );
  }
}

class Tags extends React.Component {
  checkActiveTags = (tag, props) => {
    if (this.props.activeTags.includes(tag.toLowerCase())) {
      return true;
    }
  }

  BuildTagList = (props) => {

    // Build Tag List
    const tagList = this.props.tags;

    const allTags = tagList.map((tag, i) => (
      <Tag tag={tag} key={tag.toString()} active={this.checkActiveTags(tag)} />
    ));

    return ( allTags );

  }

  render() {
    return (
      <div className="btns tags">{this.BuildTagList()}</div>
    );
  }
}

export default Tags;
