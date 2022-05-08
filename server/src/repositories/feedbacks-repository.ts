export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string | null;
}

export interface FeedbacksRepository {
  create: (feedback: FeedbackCreateData) => Promise<void>;
}