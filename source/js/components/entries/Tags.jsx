import React from 'react';


/*
TODO:
-
*/
function Tag (props) {
  return <span>{props.value}</span>;
}

// function Tags(props) {
//   const listTags = props.tags;
//   return (
//     <div className="btns tags">
//       {listTags.map((tag) =>
//         <Tag value={tag} key={tag.toString()} />
//       )}
//     </div>
//   );
// }


class Tags extends React.Component {
  render() {
    const tagList = this.props.tags;
    return (
      <div className="btns tags">
      {JSON.stringify(this.props)}
      {tagList.map((tag) => (
        <Tag entry={tag} key={tag.toString()} />
      ))}
      </div>
    );
  }
}


export default Tags;
