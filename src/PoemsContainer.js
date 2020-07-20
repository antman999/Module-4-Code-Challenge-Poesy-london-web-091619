import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
        this.props.poems.map(poems=>
          <Poem 
          title={poems.title}
          content={poems.content}
          author={poems.author}
          />
          )
        }
      </div>
    );
  }
}

export default PoemsContainer;
