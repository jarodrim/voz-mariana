/**
 * REFERENCE TESTS.
 * Codex may restructure or replace these tests while preserving README requirements.
 */
import { describe, expect, it } from "vitest";

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

describe("Voz Mariana reference contract", () => {
  it("normalizes accents and case", () => {
    expect(normalize("BUENOS DÍAS")).toBe("buenos dias");
  });

  it("two blocks of ten represent twenty attempts", () => {
    const repetitions = [10, 10];
    expect(repetitions.reduce((a, b) => a + b, 0)).toBe(20);
  });

  it("does not retain transcript when privacy flag is false", () => {
    const storeTranscript = false;
    const recognized = "me llamo arturo";
    const persisted = {
      correct: true,
      ...(storeTranscript ? { transcript: recognized } : {})
    };
    expect("transcript" in persisted).toBe(false);
  });
});
