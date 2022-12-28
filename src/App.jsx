import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import ToogleDark from './Comp/ToogleDark';
import dayjs from 'dayjs';
import {
  increment,
  deleteId,
  completeId,
  setAlarm,
  setEdit,
  setPriority,
} from './redux/action.js';
import {
  Button,
  Radio,
  Space,
  Divider,
  Input,
  List,
  Checkbox,
  TimePicker,
  Tooltip,
  Select,
} from 'antd';

import { CaretRightOutlined, DeleteOutlined } from '@ant-design/icons';
export default function App() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const data = useSelector((state) => state.sumReducer);
  const [search, setSearch] = useState(data);
  useEffect(() => {
    setSearch(data);
  }, [data]);
  console.log(data);
  // const audioElement = new Audio('https://www.w3schools.com/html/horse.ogg');
  // audioElement.play();
  // audioElement.pause();
  const handleFilter = (e) => {
    const newFilter = data.filter((item, i) => {
      return item.data.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearch(newFilter);
  };

  useEffect(() => {
    let newPrior = data.sort((a, b) => {
      if (a.priority === 'high' && b.priority !== 'high') {
        return -1;
      } else if (a.priority !== 'high' && b.priority === 'high') {
        return 1;
      } else {
        return 0;
      }
    });
    console.log(newPrior);
  }, []);

  return (
    <div className="p-2 container mx-auto w-11/12  sm:w-6/12 md:w-6/12">
      <ToogleDark />
      <div className="flex items-center  gap-2">
        <Input
          size="large"
          placeholder="Search in list"
          // prefix={
          //   <SearchOutlined className="dark:bg-slate-800 dark:text-white" />
          // }
          className="mb-2 dark:placeholder:text-slate-400 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 dark:shadow-2xl"
          onChange={handleFilter}
        />
      </div>

      <List
        className="h-80 overflow-auto dark:border-1 dark:border-slate-700 dark:shadow-2xl dark:outline-blue-500"
        header={<h2 className="dark:text-white">Todo Item</h2>}
        bordered
        dataSource={search}
        renderItem={(item, i) => (
          <List.Item
            className={`flex items-center ${
              item.complete
                ? 'bg-green-700 text-slate-100'
                : ' hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-black'
            } `}
          >
            <div
              className={`flex items-center gap-1 ${
                item.complete ? 'text-white ' : 'dark:text-white'
              }`}
            >
              <CaretRightOutlined />
              {item.data}
            </div>
            {item.edit == false ? (
              <div>
                <TimePicker
                  format={'HH:mm am/pm'}
                  use12Hours={true}
                  onChange={(time, timeString) => {
                    console.log(moment(time.$d).format('LT'));
                    dispatch(
                      setAlarm({
                        id: i,
                        time: moment(time.$d).format('LT'),
                      })
                    );
                  }}
                />
              </div>
            ) : (
              <Tooltip title="click to edit">
                <p
                  className="bg-gray-300 rounded-lg px-2 text-xs"
                  onClick={() => dispatch(setEdit(i))}
                >
                  {item.time ? item.time : ''}
                </p>
              </Tooltip>
            )}
            <Select
              className="dark:placeholder:text-slate-400 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 dark:shadow-2xl"
              defaultValue={item.priority}
              style={{
                width: 120,
              }}
              onChange={(value) => {
                dispatch(
                  setPriority({
                    id: i,
                    priority: value,
                  })
                );
              }}
              options={[
                {
                  value: 'high',
                  label: 'High',
                },
                {
                  value: 'medium',
                  label: 'Medium',
                },

                {
                  value: 'low',
                  label: 'Low',
                },
              ]}
            />
            <div className="flex gap-1">
              <DeleteOutlined
                className="cursor-pointer bg-red-600 rounded-lg p-1 text-white"
                onClick={() => {
                  dispatch(deleteId(i));
                  setTodo('');
                }}
              />
              <Checkbox
                checked={item.complete}
                onChange={(e) => {
                  dispatch(completeId(i));
                }}
              />
            </div>
          </List.Item>
        )}
      />

      <div className="flex gap-2">
        <Input
          size="large"
          placeholder="Enter task"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          className="mt-2 dark:text-slate-400 dark:placeholder:text-slate-400 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:shadow-2xl"
        />

        <Button
          disabled={todo == '' ? true : false}
          className={`mt-2 bg-indigo-500 text-white hover:bg-indigo-600  hover:text-white disabled:opacity-75`}
          type="button"
          size="large"
          onClick={() => {
            dispatch(
              increment({
                data: todo,
                complete: false,
                time: '',
                edit: false,
                priority: '',
              })
            );
            setTodo('');
          }}
        >
          Add Todo
        </Button>
      </div>
    </div>
  );
}
