import { Component } from 'react';

class Searchbar extends Component {
  state = { query: '' };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ query: value });
  };

  handleSubmit = e => {
    const { query } = this.state;
    e.preventDefault();
    this.props.onSubmit(query);
    e.currentTarget.reset();
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
