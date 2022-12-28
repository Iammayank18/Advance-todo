import React from 'react';
import { Switch } from 'antd';
import { ImSun } from 'react-icons/im';
import { FiMoon } from 'react-icons/fi';
const ToogleDark = () => {
  return (
    <>
      <Switch
        className="mb-2 dark:bg-yellow-500 bg-slate-600  bg-indigo-500 ring-1 ring-slate-900/5 shadow-xl dark:outline "
        checkedChildren={
          <ImSun size={14} className="flex items-center	justify-center mt-1" />
        }
        unCheckedChildren={
          <FiMoon size={14} className="flex items-center justify-center mt-2" />
        }
        defaultChecked
        onChange={(e) => {
          var html = document.querySelector('html');
          var darkMian = document.getElementById('darkMain');
          console.log(e);
          e == true
            ? html.classList.add('dark')
            : html.classList.remove('dark');
        }}
      />
    </>
  );
};

export default ToogleDark;
