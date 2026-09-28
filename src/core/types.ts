export type TrainingState =
  | "IDLE" | "SPEAKING" | "WAITING" | "LISTENING"
  | "EVALUATING" | "SAVING" | "NEXT_ATTEMPT"
  | "NEXT_BLOCK" | "SESSION_COMPLETE";

export interface UserPrivacy {
  storeTranscript: boolean;
}

export interface AttemptResult {
  correct: boolean;
  score: number;
  transcript?: string;
  timedOut: boolean;
}

export interface SpeechProvider {
  speak(text: string, options?: { voiceId?: string; rate?: number }): Promise<void>;
  listen(options?: { language?: string; timeoutMs?: number }): Promise<string | null>;
}
