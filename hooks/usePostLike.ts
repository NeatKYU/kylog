import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function usePostLike(initLike: number) {
  const rotuer = useRouter();
  const [like, setLike] = useState(initLike);

  const handleLike = async (userId: string, postId: string) => {
    if(!userId) {
      // 로그인 안한 상태임
      rotuer.push('/login');
      return;
    }

    const likeCount = await axios.post('/api/post/like', { userId, postId });
    if (likeCount.data) {
      setLike((prev) => prev + likeCount.data.like);
    }
  };

  return {
    like,
    handleLike,
  };
}

export default usePostLike;
