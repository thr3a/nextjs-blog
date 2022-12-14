import { Paper, Group, Text } from '@mantine/core';
import Link from 'next/link';

export type PostProps = {
  id: number;
  title: string;
  content?: string;
  created_at: string;
}

export function Post(props: PostProps) {
  return (
    <Link href={`/posts/${props.id}`} passHref>
      <Paper component="a">
        <Group position="apart" mt="md" mb="xs" >
          <h2>{props.title}</h2>
          <Text>{props.created_at}</Text>
        </Group>
      </Paper>
    </Link>

  );
};

export default Post;
