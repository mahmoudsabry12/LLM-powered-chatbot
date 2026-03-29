export interface ActionItem {
  task: string;
  owner: string;
  priority: "high" | "medium" | "low";
}

export interface Meeting {
  transcript: string;
  summary?: string;
  actionItems?: ActionItem[];
  decisions?: string[];
  risks?: string[];
  createdAt?: Date;
}