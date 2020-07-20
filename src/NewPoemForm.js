import React from "react";

class NewPoemForm extends React.Component {
  state={
    title:'',
    author:'',
    content:''
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit=e=>{
    let {title,author,content}=this.state
    e.preventDefault()
    fetch('http://localhost:3000/poems',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({
        title,
        author,
        content
      })
    })
    .then(resp=>resp.json())
 .then(data => {this.setState({
  title:'',
  author:'',
  content:''
  
 })
this.props.handleNewPoem(data)
})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="new-poem-form">
        <input name="title" onChange={this.handleChange}placeholder="Title" value={this.state.title}/>
        <input name="author" onChange={this.handleChange}placeholder="Author"  value={this.state.author}/>
        <textarea name="content" onChange={this.handleChange} placeholder="Write your masterpiece here..."  rows={10} value={this.state.content}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
