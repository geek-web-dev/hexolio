type TimelineCardProps = {
  year: {
    from: string;
    to: string;
  };
  at: string;
  event: string;
  description: string;
};

const TimelineCard = ({
  year: { from, to },
  at,
  event,
  description,
}: TimelineCardProps) => {
  return (
    <div className="p-4 border border-[--line-color] rounded-sm relative z-40 bg-[--pure-background] hover:shadow-md duration-500 dark:shadow-white/5 transition-shadow">
      <div className="bg-[--paragraph] rounded-r-sm w-fit px-2 py-0.5 text-sm text-white font-[500] flex items-center gap-2">
        <span>{from}</span>
        <div className="w-4 bg-white/50 h-px" />
        <span>{to}</span>
      </div>
      <div className="mt-4 space-y-2">
        <h1 className="text-[--pure-text] text-xl">
          <span className="font-[500]">{event}</span> -{" "}
          <span className="text-[--main]">{at}</span>
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
