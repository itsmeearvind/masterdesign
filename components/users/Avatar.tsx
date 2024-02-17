import Image from "next/image";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type Props = {
  name: string;
  otherStyles?: string;
};

const Avatar = ({ name, otherStyles }: Props) => (
  <>
    <Tooltip>
      <TooltipTrigger>
        <div
          className={`relative h-9 w-9 rounded-full ${otherStyles}`}
          data-tooltip={name}>
          <Image
            src={`https://liveblocks.io/avatars/avatar-${Math.floor(
              Math.random() * 30
            )}.png`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="rounded-full"
            alt={name}
          />
        </div>
      </TooltipTrigger>
      <TooltipContent className="border-none bg-primary-grey-200 px-2.5 py-1.5 text-xs">
        {name}
      </TooltipContent>
    </Tooltip>
  </>
);

export default Avatar;
