import Image from "next/image";
import type { ReactNode } from "react";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  className: "h-5 w-5",
} as const;

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconCircle = ({ children }: { children: ReactNode }) => (
  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-current/10 ring-1 ring-current/15 group-hover:bg-current/20 max-[379px]:hidden">
    {children}
  </span>
);

const Feedback = () => {
  return (
    <address className="grid justify-items-start gap-3 not-italic">
      <a href="tel:+79513774071" className="group flex items-center gap-3">
        <IconCircle>
          <PhoneIcon />
        </IconCircle>
        <span className="min-w-0 font-serif text-[1.375rem] font-medium underline-offset-4 [overflow-wrap:anywhere] group-hover:underline lg:text-2xl">
          +7 (951) 377-40-71
        </span>
      </a>

      <a
        href="mailto:sonya.nesterchuk@bk.ru"
        className="group flex items-center gap-3"
      >
        <IconCircle>
          <MailIcon />
        </IconCircle>
        <span className="min-w-0 text-lg underline-offset-4 [overflow-wrap:anywhere] group-hover:underline lg:text-xl">
          sonya.nesterchuk@bk.ru
        </span>
      </a>

      <div className="mt-2 flex gap-3">
        <a
          href="https://max.ru/u/f9LHodD0cOINQdIPPAawyoEL0xUE9ISuGuOVBB2lrJOoeCsWzMAHGgyweEU"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Мессенджер Макс"
          className="block rounded-xl transition-transform hover:scale-105"
        >
          <Image
            src={"/max.svg"}
            width={44}
            height={44}
            loading="lazy"
            alt=""
          />
        </a>
        <a
          href="https://t.me/+79513774071"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Мессенджер Телеграм"
          className="block rounded-full transition-transform hover:scale-105"
        >
          <Image
            src={"/telegram.svg"}
            width={44}
            height={44}
            loading="lazy"
            alt=""
          />
        </a>
      </div>
    </address>
  );
};

export default Feedback;
