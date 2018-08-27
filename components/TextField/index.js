import React from 'react';
import PropTypes from 'prop-types';

class TextField extends React.Component {
  render() {
    const {
      onChange,
      title,
      value,
    } = this.props;
    return (
      <div className="to-do">
        <h4 className="to-do-title">{title}</h4>
        <input
          className="to-do-input"
          type="text"
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
}
TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default TextField;
