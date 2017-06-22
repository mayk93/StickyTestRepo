import React, { PureComponent } from 'react';

import { Sticky, StickyContainer } from 'react-sticky';

import Wrapper from './Wrapper';

class App extends PureComponent {
  render() {
    return (
      <div>
        {
          [1,2,3,4,5,6,7,8].map(i => {
            return (
              <StickyContainer key={i} style={{ height: 1000, background: `hsl(${i*40}, 70%, 90%)` }}>
                <Wrapper>
                <Sticky>
                  {
                    ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
                      return (
                        <div style={{ ...style, height: 80, background: `hsl(${i*40}, 70%, 50%)`}}>
                          <h2 style={{ lineHeight: '80px', padding: '0 15px', margin: 0 }}>
                            <span className="pull-left">&lt;Sticky #{i} /&gt;</span>
                          </h2>
                        </div>
                      )
                    }
                  }
                </Sticky>
                </Wrapper>
                <h2 className="text-center" style={{ marginTop: 150 }}>&lt;StickyContainer #{i} /&gt;</h2>
              </StickyContainer>
            )
          })
        }
      </div>
    );
  }
}

export default App;
