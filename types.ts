import React from 'react';

export type CommandEntry = {
  id: string;
  type: 'command' | 'response';
  content: string | React.ReactNode;
  timestamp: Date;
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: string[];
  color: 'blue' | 'teal' | 'slate';
}
