import React from 'react';

export default function PrevArrow() {
  return (
    <div {...this.props}>
      <button type="button" className="col-sm-offset-6"><i className="glyphicon glyphicon-arrow-left" aria-hidden="true" /></button>
    </div>
  );
}
