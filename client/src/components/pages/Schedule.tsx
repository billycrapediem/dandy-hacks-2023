import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import React, { useEffect, useState } from 'react';
import './Schedule.css';
import { getTasks } from '../utils/api';
import { Tab } from 'react-bootstrap';
import TaskSchema from "../../../../shared/Tasks";

const Schedule = () => {
  const [tasks, setTasks] = useState<TaskSchema[]>([]);
  useEffect(() => {
    const fetchTasks = async () => {
      const tmpTasks = await getTasks();
      setTasks(tmpTasks);
      console.log(tasks);
    };
    fetchTasks();
  }, []);

  const data = tasks.map(task => ({
    Id: task.id,               // Event ID
    Subject: task.name,       // Event title
    //StartTime: task.start,    // Event start time
    //EndTime: task.end         // Event end time
  }));

  /*const data = [
    {
      Id: 1,
      Subject: 'Meeting 1',
      StartTime: new Date(), // November 2, 2023, 10:00 AM
      EndTime: new Date(2023, 10, 4, 19, 30), // November 2, 2023, 11:30 AM
    },
    {
      Id: 2,
      Subject: 'Meeting 2',
      StartTime: new Date(2023, 10, 3, 14, 0), // November 3, 2023, 02:00 PM
      EndTime: new Date(2023, 10, 3, 15, 30), // November 3, 2023, 03:30 PM
    },
  ];*/

  return (
    <ScheduleComponent
      selectedDate={new Date()} // November 1, 2023
      eventSettings={{
        dataSource: data,
      }}
      height='auto'
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default Schedule;