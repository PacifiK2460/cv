import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";

import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  repo?: string;
}

export function ProjectCard({ title, description, tags, link, repo }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs print:text-[10px]">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex w-full flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
        {
          repo && (
            <a
              href={repo}
              target="_blank"
              className="mt-2 ml-auto text-sm underline"
            >
              <div className="flex-none w-7 content-center">
                <GitHubLogoIcon className="w-6 h-6" />
              </div>
            </a>
          )
        }
      </CardContent>
      <CardFooter className="flex-col gap-2 align-middle content-start flex-wrap text-wrap hidden print:flex">
        {
          repo ? (
            <p className="text-[9px] flex-wrap text-wrap">Repo: {repo}</p>
          ) : (
            null
          )
        }
        {link ? (
          <p className="text-[9px] flex-wrap text-wrap">URL: {link}</p>
        ) : (
          null
        )}

      </CardFooter>
    </Card>
  );
}
