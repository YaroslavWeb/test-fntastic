import { Divider } from "../../utility/Divider"
import { Button } from "../../Button"
import { SelectorFriends } from "../../SelectorFriends"

export function CreateServerModal() {
  return (
    <div>
      <Divider height={2} my={20} />
      <div>Server name</div>
      <Divider />
      <input type="text" />
      <Divider my={16} />
      <div>Invite your friends</div>
      <Divider />
      <SelectorFriends />
      <Divider height={2} my={20} />
      <Button label="CREATE" fullWidth />
    </div>
  )
}
