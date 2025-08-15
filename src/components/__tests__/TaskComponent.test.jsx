import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskComponent from '../TaskComponent';

describe('TaskComponent', () => {
  test('renders task details correctly', () => {
    const mockTask = {
      id: 'DP-4',
      title: 'Implement Task Component',
      description: 'Create a React component to display Jira task details.',
      status: 'In Progress',
    };
    render(<TaskComponent task={mockTask} />);
    expect(screen.getByText(/DP-4/i)).toBeInTheDocument();
    expect(screen.getByText(/Implement Task Component/i)).toBeInTheDocument();
    expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
  });
});
