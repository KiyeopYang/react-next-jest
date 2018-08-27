import React from 'react';
import PropTypes from 'prop-types';

class TextField extends React.Component {
  state = {
    value: '',
  };
  handleChange = e => this.setState({ value: e.target.value });
  submit = e => {
    e.preventDefault();
    this.props.submit(this.state.value);
    this.setState({ value: '' });
  }
  render() {
    return (
      <form className="to-do" onSubmit={this.submit}>
        <input
          className="to-do-input"
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </form>
    );
  }
}
TextField.propTypes = {
  submit: PropTypes.func.isRequired,
}
export default TextField;
