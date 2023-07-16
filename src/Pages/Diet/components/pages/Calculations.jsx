import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../context/MainContextProvider';

function Calculations() {
  const { localData } = useContext(MainContext);
  const [userData, setUserData] = useState(localData);

  useEffect(() => {
    setUserData(localData);
  }, [localData]);

  return (
    <div>
      <table>
        <caption>Name and BMI information</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>BMI</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(userData) && !userData.length ? (
            <tr>
              <td>No one yet...</td>
              <td></td>
            </tr>
          ) : (
            userData?.map((item, index) => (
              <tr key={index}>
                <td>{item?.name}</td>
                <td>{item?.bmi}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Calculations;
