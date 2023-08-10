"use client";

import Twemoji from "@/components/Twemoji";
import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";
import Link from "next/link";

// I will assume we hit the error boundary if I messed up the frontmatter for a blog post... so just return 404.
export default function Error({}: { error: Error; reset: () => void }) {
  return (
    <div className="container mx-auto py-24 space-y-6">
      <Title tag="h2">Blog post not found</Title>
      <p>
        <Twemoji emoji="🙈" /> Don&apos;t worry - that was probably my fault...
      </p>
      <div>
        <Link href="/blog">
          <Button>Back to all Posts</Button>
        </Link>
      </div>
    </div>
  );
}
