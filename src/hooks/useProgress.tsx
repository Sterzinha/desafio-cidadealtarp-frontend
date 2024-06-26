import { useProgressStore } from "../stores/useProgressStore";

export function useProgress() {
  const { progress, updateProgress, getProgress } = useProgressStore();

  function startProgress() {
    const interval = setInterval(() => {
      if (getProgress() <= 0) {
        stopProgress(interval);
        return;
      }

      updateProgress(getProgress() - 10);
    }, 500);

    return interval;
  }

  function stopProgress(interval: number) {
    clearInterval(interval);
  }

  return {
    progress,
    startProgress,
    stopProgress,

    updateProgress,
  };
}
