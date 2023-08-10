import { Icons, LucideIconProps } from "@/components/Icons";
import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { CircleDot, GitCommit } from "lucide-react";
import { Octokit } from "octokit";
import { Fragment } from "react";

const getGitEvents = async ({ username }: { username: string }) => {
  const octokit = new Octokit({});

  const { data } = await octokit.request("GET /users/{username}/events", {
    username: username,
  });

  return data;
};

interface GitCommitPayload {
  sha: string;
  message: string;
  author: {
    name: string;
    email: string;
  };
  url: string;
}

const iconMap = {
  PushEvent: "git-merge",
  PullRequestEvent: "git-pull-request",
} satisfies Record<string, LucideIconProps["name"]>;

export default async function GitFeed({ username }: { username: string }) {
  const gitEvents = (await getGitEvents({ username }))
    .filter((event) => ["PushEvent", "PullRequestEvent"].includes(event.type || ""))
    .map((event) => ({
      commits: ((event.payload as any).commits as GitCommitPayload[] | undefined) || [],
      repo: event.repo,
      id: event.id,
      type: event.type,
    }));
  return (
    <ul className="space-y-4">
      {gitEvents.map((event) => (
        <Fragment key={event.id}>
          <li className="flex">
            <div className="flex-1">
              <a
                href={`https://github.com/${event.repo.name}`}
                target="_blank"
                rel="noreferrer"
              >
                <Badge variant={"outline"} className="flex-inline items-center gap-4">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="uppercase">
                      {event.repo.name.split("/")?.at(-1)?.slice(0, 2) || "UNK"}
                    </AvatarFallback>
                  </Avatar>
                  {event.repo.name}
                  <Icons.LucideIcon
                    name={iconMap[event.type as keyof typeof iconMap]}
                    className="h-[1.2em] w-[1.2em]"
                  />
                </Badge>
              </a>
              <ul className="space-y-2 mt-2 pl-4">
                {event.commits.map((commit) => (
                  <li
                    key={commit.sha}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <GitCommit className="h-[1.1em] w-[1.1em]" />
                    {commit.message}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <hr />
        </Fragment>
      ))}
    </ul>
  );
}
