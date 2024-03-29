import { user } from '@/interface/common';
export interface post {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    authorId: string;
    author?: user;
    thumbnail: string;
    likes: like[];
    comments: comment[];
}

export interface comment {
    id: string;
    content: string;
    author?: user;
    authorId: string;
    post?: post;
    postId: string;
    createdAt: string;
    updatedAt: string;
}

export interface like {
    id: string;
    userId: string;
    postId: string;
    createdAt: string;
}
