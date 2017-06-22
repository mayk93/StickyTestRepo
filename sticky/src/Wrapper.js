/**
 * Created by michael on 22/06/2017.
 */

import React, { PureComponent } from 'react';


class Wrapper extends PureComponent {
  render() {
    return (
      <div>
       <p>Start wrapper</p>
          <hr/>
          {this.props.children}
          <hr/>
          <p>End wrapper</p>
      </div>
    );
  }
}

export default Wrapper;
