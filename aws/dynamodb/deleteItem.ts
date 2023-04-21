import { DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";
import { DeleteCommandInput } from "@aws-sdk/lib-dynamodb/dist-types/commands/DeleteCommand";

// Set the parameters
// export const params = {
//   TableName: "CUSTOMER_LIST_NEWEST",
//   Key: {
//     CUSTOMER_ID: { N: "1" },
//   },
// };
export const deleteItem = async (params: DeleteCommandInput) => {
  try {
    const data = await ddbClient.send(new DeleteItemCommand(params));
    console.log("Success, item deleted", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
