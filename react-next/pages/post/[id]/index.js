import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Hello: {id}</div>;
};

export default Post;
