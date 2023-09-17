import * as RadixProgress from "@radix-ui/react-progress";

type ProgressType = {
  progress: number;
  labelTop?: string;
  labelBottom?: string;
};

const Progress = ({ progress, labelTop, labelBottom }: ProgressType) => {
  return (
    <div>
      {labelTop && <span className="text-xs">{labelTop}</span>}
      <RadixProgress.Root
        className="relative overflow-hidden bg-primary-orange rounded-sm w-full h-[25px]"
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: "translateZ(0)",
        }}
        value={progress}
      >
        <RadixProgress.Indicator
          className="bg-white w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </RadixProgress.Root>
      {labelBottom && <span className="text-xs">{labelBottom}</span>}
    </div>
  );
};

export default Progress;
