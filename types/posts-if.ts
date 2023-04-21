export interface CreatePostInputIF {
  postId?: string
  userId: string
  createdOn?: string
  title?: string
  content?: string
}

export interface DynamoPostIF {
  userId?: { S: string }
  createdOn?: { S: string }
  title?: { S: string }
  content?: { S: string }
}
