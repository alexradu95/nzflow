import { writable } from 'svelte/store';
import { MarkerType, type Edge } from '@xyflow/svelte';

import type { AppNode } from '../nodes/node_types';

export const nodes = writable<AppNode[]>([
  {
    id: '2-1',
    type: 'group',
    position: {
      x: -170,
      y: 250
    },
    data: {},
    style: `
      backgroundColor: rgba(208, 192, 247, 0.2);
      width: 380px;
      height: 180px;
    `
  },
  {
    id: '2-2',
    data: {
      label: 'Node with Toolbar'
    },
    type: 'tools',
    position: { x: 50, y: 50 },
    style: `
      background: rgb(208, 192, 247);
      width: 80px;
      height: 80px;
    `,
    parentId: '2-1',
    extent: 'parent'
  },
  {
    id: '2-3',
    type: 'resizer',
    data: {
      label: 'resizable node'
    },
    position: { x: 250, y: 50 },
    style: `
      background: rgb(208, 192, 247);
      color: white;
      width: 80px;
      height: 80px;
    `,
    parentId: '2-1',
    extent: 'parent'
  },
  {
    id: '3-2',
    type: 'textinput',
    position: { x: 150, y: 650 },
    data: {}
  },
  {
    id: '3-1',
    type: 'circle',
    position: { x: 350, y: 500 },
    data: {}
  }
]);

export const edges = writable<Edge[]>([
  {
    id: 'e1-2',
    source: '1-1',
    target: '1-2',
    label: 'edge',
    type: 'smoothstep'
  },
  {
    id: 'e1-3',
    source: '1-1',
    target: '1-3',
    animated: true,
    label: 'animated edge'
  },
  {
    id: 'e2-2',
    source: '1-2',
    target: '2-2',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: 'e2-3',
    source: '2-2',
    target: '2-3',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: 'e3-3',
    source: '2-3',
    sourceHandle: 'a',
    target: '3-2',
    type: 'button',
    animated: true,
    style: `stroke: rgb(158, 118, 255); strokeWidth: 2px`
  },
  {
    id: 'e3-4',
    source: '2-3',
    sourceHandle: 'b',
    target: '3-1',
    type: 'button',
    style: `strokeWidth: 2px`
  }
]);
