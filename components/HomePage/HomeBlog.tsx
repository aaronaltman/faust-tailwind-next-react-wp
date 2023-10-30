import { getClient } from '@faustwp/experimental-app-router';
import { gql } from '@apollo/client';
import Link from 'next/link';

export default async function Home() {
  let client = await getClient();

  interface PostType{
    id:string,
    title: string,
    uri: string,
    slug:string
  }

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        posts(first:6) {
          nodes {
            id
            title
            uri
            slug
          }
        }
      }
    `,
  });

  return (
    <main>
      <h2 className='text-lg'>Posts</h2>
      <ul>
        {data.posts.nodes.map((post:PostType) => (
          <li className='text-base'>
            <Link href={`/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}