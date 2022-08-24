import { Paper, Group, Text, Badge } from '@mantine/core';

export type PostProps = {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export function PostContent(props: PostProps) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.content}
      </p>
    </div>
  );
};

export default PostContent;
