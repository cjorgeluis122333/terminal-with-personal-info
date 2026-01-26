import React from 'react';

export type ResponseType = 'error' | 'help' | 'about' | 'stack' | 'works' | 'contact' | 'ai';

export type CommandEntry = {
  id: string;
  type: 'command' | 'response';
  content: string | React.ReactNode;
  timestamp: Date;
  originalCommand?: string; // Store original command for re-translation
  responseType?: ResponseType; // Type of response for dynamic re-translation
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
