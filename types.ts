
export interface TableRow {
  metric: string;
  public: string;
  private: string;
  proposed: string;
}

export interface TimelinePhase {
  phase: string;
  title: string;
  description: string;
}

export interface VennItem {
  name: string;
  color: string;
}

export type SlideContent = string[] | { type: 'table'; data: TableRow[] } | { type: 'timeline'; data: TimelinePhase[] } | { type: 'venn'; items: VennItem[] } | { type: 'custom'; slideNumber: number };

export interface SlideData {
  slideNumber: number;
  title: string;
  subtitle?: string;
  presenter?: string;
  keyContent: SlideContent;
}
