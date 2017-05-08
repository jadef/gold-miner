import React from 'react';
import PropTypes from 'prop-types';

// -- Styles
import '../../../sass/components/entries/tags.scss';

/* -- Hierarchy
  - App
    - Main
      - Entries
        - Entry
          - *Tags*
            - *Tag*
*/

class Tags extends React.Component {
  checkActiveTags = (tag) => {
    if (this.props.activeTags.includes(tag)) {
      return true;
    }
  }

  BuildTagList = () => {
    // Build Tag List
    const tagList = this.props.tags;

    const allTags = tagList.map((tag) => (
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

// -- Props
Tags.propTypes = {
  activeTags: PropTypes.array,
  tags: PropTypes.array
};

// -- Single Tag
class Tag extends React.Component {
  render() {
    return (
      <span className={this.props.active ? 'active': null}>{this.props.tag}</span>
    );
  }
}

// -- Props
Tag.propTypes = {
  active: PropTypes.bool,
  tag: PropTypes.string
};

export default Tags;
