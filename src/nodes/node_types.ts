import { type BuiltInNode, type Node } from '@xyflow/svelte';

export type CircleNode = Node<{}>;

export type AppNode = BuiltInNode | CircleNode;
