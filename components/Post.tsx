import { Paper, Group, Text, Badge } from '@mantine/core';

export type PostProps = {
  id: number;
  title: string;
  content?: string;
  created_at: string;
}

export function Post(props: PostProps) {
  return (
    <Group position="apart" mt="md" mb="xs">
      <h2>{props.title}</h2>
      <Text>{props.created_at}</Text>
    </Group>
  );
};

export default Post;
