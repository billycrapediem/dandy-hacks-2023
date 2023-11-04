import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject,ResourcesDirective,ResourceDirective } from '@syncfusion/ej2-react-schedule';
import React, { useEffect, useState } from 'react';
import './Schedule.css';
import { getTasks } from '../utils/endPoint';
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
    StartTime: task.due_dy,    // Event start time
    EndTime: task.due_dy         // Event end time
  }));
  const generateResourceData = (taskList:TaskSchema[]): Object[] => {
    let data: { [key: string]: Object }[] = [];
    let colors: string[] = [
      '#ff8787', '#9775fa', '#748ffc', '#3bc9db', '#69db7c',
      '#fdd835', '#748ffc', '#9775fa', '#df5286', '#7fa900',
      '#fec200', '#5978ee', '#00bdae', '#ea80fc'
    ];
    function generateColor(value:number):string{
      if(value<10){
        return colors[0];
      }else if(value<20){
        return colors[1];
      }else if(value<30){
        return colors[2];
      }else if(value<40){
        return colors[3];
      }else{
        return colors[4];
      }
    }
    taskList.forEach((task, index) => {
      console.log(task.value),
      console.log(generateColor(task.value))
      data.push({
        Id: task.id,
        Text: task.name,
        Color: generateColor(task.value),
      });
    });
    return data;
  }

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
       <ResourcesDirective>
        <ResourceDirective field='ResourceId' title='Resource' name='Resources'
          dataSource={generateResourceData(tasks)}
          textField='Text' idField='Id' colorField='Color'>
        </ResourceDirective>
      </ResourcesDirective>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default Schedule;