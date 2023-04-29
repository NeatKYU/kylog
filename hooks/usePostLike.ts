import { useState } from 'react';
import axios from 'axios';

function usePostLike(initLike: number) {
  const [like, setLike] = useState(initLike);

  const handleLike = async (userId: string, postId: string) => {
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
