import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Title } from "@/components/ui/Title";
import { getAllPostsMeta, getBlogImage } from "@/lib/mdx";
import dayjs from "dayjs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Dyrhoi",
};

export default async function Blog() {
  const postsMeta = (await getAllPostsMeta()).sort((a, b) => dayjs(b.date).diff(a.date));
  return (
    <main className="container py-24">
      {postsMeta.length === 0 ? (
        <>
          <Title tag={"h2"}>Nothing to explore yet...</Title>
        </>
      ) : (
        <div className="justify-items-center xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-24">
          {postsMeta.map((meta) => (
            <Link key={meta.slug} className="space-y-4" href={`/blog/${meta.slug}`}>
              <Image
                alt={meta.title}
                src={getBlogImage({ name: meta.image })}
                height={200}
                width={500}
                className="rounded-xl"
              />
              <div>
                <span className="capitalize text-xs text-muted-foreground">
                  {meta.tags[0]}
                </span>
              </div>
              <div className="space-y-2">
                <Title tag="h3">{meta.title}</Title>
                <p className="text-muted-foreground">{meta.description}</p>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  {/* Probably on me who will make blog posts - maybe in the future ;) */}
                  <AvatarImage className="bg-muted" src="/assets/images/picture-of-me.png" />
                  <AvatarFallback>DY</AvatarFallback>
                </Avatar>
                <span className="text-sm text-foreground">Dyrhoi</span>
                <span>|</span>
                <span>{dayjs(meta.date).format("MMM D, YYYY")}</span>
              </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
