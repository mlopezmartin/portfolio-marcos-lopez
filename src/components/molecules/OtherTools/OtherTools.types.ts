// src/components/molecules/OtherTools/OtherTools.types.ts
export interface ToolItem {
  name: string;
  icon?: React.ReactNode;
}

export interface ToolGroup {
  title: string;
  tools: ToolItem[];
}

export interface OtherToolsProps {
  sectionTitle: string;
  groups: ToolGroup[];
}
