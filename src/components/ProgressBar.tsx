type ProgressBarProps = {
  progress: number;
};
export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="bg-slate-400 h-2.5 rounded-full ">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
