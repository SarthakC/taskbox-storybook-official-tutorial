import React from 'react';

import { PureTaskList } from './TaskList';
import { taskData, actionsData } from '../Task/Task.stories';
import { withA11Y } from '@storybook/addon-a11y';

export default {
  component: PureTaskList,
  title: 'PureTaskList',
  decorators: [
    story => <div style={{ padding: '3rem' }}>{story()}</div>,
    withA11Y,
  ],
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...taskData, id: '1', title: 'Task 1' },
  { ...taskData, id: '2', title: 'Task 2' },
  { ...taskData, id: '3', title: 'Task 3' },
  { ...taskData, id: '4', title: 'Task 4' },
  { ...taskData, id: '5', title: 'Task 5' },
  { ...taskData, id: '6', title: 'Task 6' },
];

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];

export const Default = () => (
  <PureTaskList tasks={defaultTasksData} {...actionsData} />
);

export const WithPinnedTasks = () => (
  <PureTaskList tasks={withPinnedTasksData} {...actionsData} />
);

export const Loading = () => (
  <PureTaskList loading tasks={[]} {...actionsData} />
);

export const Empty = () => <PureTaskList tasks={[]} {...actionsData} />;
