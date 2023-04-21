import { APIGatewayEvent } from 'aws-lambda'
import { putItem } from '../../aws/dynamodb/putItem'
import { PutCommandInput } from '@aws-sdk/lib-dynamodb'
import { returnData } from '../../utils/returnData'
import { CreatePostInputIF } from '../../types/posts-if'
import { v4 as uuidv4 } from 'uuid'

export const handler = async (event: APIGatewayEvent) => {
  if (!event.body) {
    return returnData(400, 'No body!')
  }
  const post: CreatePostInputIF = JSON.parse(event.body)
  const uuid = uuidv4()
  var now = new Date()
  const createdOn = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()

  const params: PutCommandInput = {
    TableName: process.env.TABLE_NAME_POSTS,
    Item: {
      postId: uuid,
      userId: post.userId,
      createdOn: createdOn,
      title: post.title,
      content: post.content,
    },
  }
  const result = await putItem(params)
  if (result.success) {
    return returnData(200, 'Success!', JSON.stringify({ postId: uuid }))
  } else {
    return returnData(400, result.error)
  }
}
