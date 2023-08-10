import { Title } from "@/components/ui/Title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { getBlogImage, getPostBySlug } from "@/lib/mdx";
import dayjs from "dayjs";
import Image from "next/image";
import { notFound } from "next/navigation";
import { error } from "console";

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  try {
    const { meta } = await getPageContent(params.slug);
    return { title: `${meta.title} - Dyrhoi Blog` };
  } catch (e) {
    return;
  }
}

export default async function BlogEntry({ params: { slug } }: Props) {
  const { content, meta } = await getPostBySlug(slug);
  return (
    <div className="py-12 space-y-8">
      <div className="container space-y-8 max-w-4xl">
        <div className="prose prose-zinc dark:prose-invert mx-auto space-y-4">
          <span className="text-muted-foreground flex gap-4 text-xs">
            <span className="capitalize">{meta.tags[0]}</span>
            <span>|</span>
            <span>{dayjs(meta.date).format("MMM D, YYYY")}</span>
          </span>
          <Title tag="h1" className="text-4xl">
            {meta.title}
          </Title>
          <div className="not-prose flex gap-4 pb-2 pt-4 items-center">
            <Avatar>
              {/* Probably on me who will make blog posts - maybe in the future ;) */}
              <AvatarImage className="bg-muted" src="/assets/images/picture-of-me.png" />
              <AvatarFallback>DY</AvatarFallback>
            </Avatar>
            <span className="text-sm">Dyrhoi</span>
          </div>
        </div>

        <Image
          src={getBlogImage({ name: meta.image })}
          height={550}
          width={950}
          alt={meta.title || "Banner image"}
          className="rounded-xl"
          quality={100}
        />
      </div>
      <article className="prose prose-img:rounded-xl prose-zinc dark:prose-invert mx-auto">
        {content}
      </article>
    </div>
  );
}
