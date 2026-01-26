import React from 'react';

export type CommandEntry = {
  id: string;
  type: 'command' | 'response';
  content: string | React.ReactNode;
  timestamp: Date;
  originalCommand?: string; // Store original command for re-translation
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
