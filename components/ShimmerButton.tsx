import Link from "next/link";

const ShimmerButton = ({
  title,
  icon,
  position,
  href,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  href: string; // Ensure href is passed
  otherClasses?: string;
}) => {
  return (
    <Link href={href}>
      <button
        className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses}`}
      >
        {position === "left" && icon && <span className="mr-2">{icon}</span>}
        {title}
        {position === "right" && icon && <span className="ml-2">{icon}</span>}
      </button>
    </Link>
  );
};

export default ShimmerButton;
