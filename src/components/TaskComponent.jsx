import React from 'react';
import PropTypes from 'prop-types';
import logger from '../../src/utils/logger'; // Adjust path as needed

/**
 * TaskComponent - Displays details of a Jira task.
 * @param {Object} props - Component props
 * @param {Object} props.task - The task object containing id, title, description, and status.
 * @returns {React.Element} Rendered component
 */
const TaskComponent = ({ task }) => {
  logger.debug('Rendering TaskComponent', { taskId: task.id });

  return (
    <div className="task-component">
      <h2>{task.title} (ID: {task.id})</h2>
      <p><strong>Status:</strong> {task.status}</p>
      <p>{task.description}</p>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskComponent;
