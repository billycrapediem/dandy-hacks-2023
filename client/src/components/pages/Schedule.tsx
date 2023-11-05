import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject,ResourcesDirective,ResourceDirective, ViewDirective, ViewsDirective } from '@syncfusion/ej2-react-schedule';
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

  const data = tasks.map((task) => ({
    Id: task.id,               // Event ID
    Subject: task.name,       // Event title
    StartTime: task.due_dy,    // Event start time
    EndTime: task.due_dy         // Event end time
  }));
  const generateResourceData = (taskList:TaskSchema[]): Object[] => {
    let data: { [key: string]: Object }[] = [];
    let colors: string[] = [
      '#FFA500', '#9775fa', '#800080', '#3bc9db', '#69db7c',
      '#fdd835', '#748ffc', '#9775fa', '#df5286', '#7fa900',
      '#fec200', '#5978ee', '#00bdae', '#ea80fc'
    ];
    /*function generateColor(value:number):string{
      if(value<10){
        return colors[0];
      }else if(value<20){
        return colors[5];
      }else if(value<30){
        return colors[8];
      }else if(value<40){
        return colors[10];
      }else{
        return colors[12];
      }
    }*/
    
    tasks.forEach((task:TaskSchema) => {
      let n = Math.floor(Math.random() * colors.length);
      data.push({
        Id: task.id,
        Text: task.name,
        Color: colors[n],
      });
    });
    return data;
  }

  return (
    <ScheduleComponent
      selectedDate={new Date()} // November 1, 2023
      eventSettings={{
        dataSource: data,
      }}
      
      height='auto'
    >
       <ResourcesDirective>
        <ResourceDirective field='ResourceId' title='Resource' allowMultiple={true} name='Resources'
          dataSource={generateResourceData(tasks)}
          textField='Text' idField='Id' colorField='Color'>
        </ResourceDirective>
      </ResourcesDirective>
      <ViewsDirective>
      <ViewDirective option='Month' />
      <ViewDirective option='Agenda' />
    </ViewsDirective>
      <Inject services={[ Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default Schedule;