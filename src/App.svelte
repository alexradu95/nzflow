<script lang="ts">
  import { writable } from 'svelte/store';
  import {
    SvelteFlow,
    Background,
    Controls,
    MiniMap,
    type NodeTypes,
    type EdgeTypes
  } from '@xyflow/svelte';

  import '@xyflow/svelte/dist/style.css';

  import { nodes, edges } from './store/nodes-and-edges';
  import CustomNode from './nodes/example_nodes/CustomNode.svelte';
  import AnnotationNode from './nodes/example_nodes/AnnotationNode.svelte';
  import ButtonEdge from './nodes/example_nodes/ButtonEdge.svelte';
  import CircleNode from './nodes/example_nodes/CircleNode.svelte';
  import ResizableNode from './nodes/example_nodes/ResizableNode.svelte';
  import ToolbarNode from './nodes/example_nodes/ToolbarNode.svelte';
  import TextNode from './nodes/example_nodes/TextNode.svelte';

  import './styles/overview.css';

  const nodeTypes: NodeTypes = {
    custom: CustomNode,
    annotation: AnnotationNode,
    circle: CircleNode,
    resizer: ResizableNode,
    tools: ToolbarNode,
    textinput: TextNode
  };

  const edgeTypes: EdgeTypes = {
    button: ButtonEdge
  };
</script>

<div style="height:100vh;" class="overview">
  <SvelteFlow {nodes} {edges} {nodeTypes} {edgeTypes} fitView>
    <Background patternColor="#aaa" gap={16} />
    <Controls />
    <MiniMap zoomable pannable height={120} />
  </SvelteFlow>
</div>
