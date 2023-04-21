/* import { DeleteCommandInput } from "@aws-sdk/lib-dynamodb"
import { returnData } from "../../utils/returnData"
import { deleteItem } from "../../aws/dynamodb/deleteItem"


interface UserDataIF {
    userId?: { S: string }
}

export const deleteUser = async (user: UserDataIF) => {
    const TABLE_NAME_USERS = process.env.TABLE_NAME_USERS
    if (!TABLE_NAME_USERS) {
        console.log('No TABLE_NAME_USERS')
        return
    }
    if (!user.userId ) {
        return returnData(400, 'No user ID!')
    }

    const params: DeleteCommandInput = {
        TableName: TABLE_NAME_USERS,
        Key: {
            userId: user.userId,
        }
    }

    return await deleteItem(params)
}
 */
{
  ;('deleteUser')
}
