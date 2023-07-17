import React, { createContext } from 'react';
import { data, data2 } from './ChildA';
const ChildC = ({ name }) => {
  return (
    <div>
      <data.Consumer>
        {(name) => {
          return (
            <>
              <data2.Consumer>
                {(title) => {
                  return (
                    <>
                      my name is {name}
                      my title is {title}
                    </>
                  );
                }}
              </data2.Consumer>
              ;
            </>
          );
        }}
      </data.Consumer>
    </div>
  );
};

export default ChildC;
