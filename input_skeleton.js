import { createMachine } from "https://unpkg.com/xstate@4/dist/xstate.web.js";

export const inputSkeleton = 
/** @xstate-layout N4IgpgJg5mDOIC5QEsB2AHArgFwMoGswAbMbAe1QDpkISBiAeQDkB9AMQYGEBVXRUdGVjJsyCvxAAPRAFoAzAEYATJQAcABgDsSgCyrVOgKyaFANgCcAGhABPWXKXq1qpRaUL1cuefM6Avn7WaFh4hCTkVABmZADGmLCQLME4jKwAQgAy3ABKEoLCouJIUrJKPpRG6uqGvj6mruaG1nYI8gYVphYKOnIm2pqaAYEgqGQQcBLJocSkFNS0YHlCImKoEtKtPYaUpgqGOuqmqnKqJuZKTbb2mtteCgrmnZ4eWgFBGDgEMxGU0XEJECSH2wSwKq3WsjMckoLyUXm8ciqvUuLXk2jUigeT0UVUGwymX3CRQEy0Ka2KGxkRnMOz2ByOJzOF2asiMmgqclM6lUpmMhh5Ck0-iGQA */
createMachine({
  id: "inputSkeleton",
  initial: "idle",
  states: {
    idle: {
      on: {
        ON_FOCUS: {
          target: "#inputSkeleton.focused_input",
        },
      },
    },
    focused_input: {
      on: {
        ON_BLUR: {
          target: "#inputSkeleton.idle",
        },
      },
    },
  },
});
