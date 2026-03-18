import { getUsers } from "@/utils/actions";
import DeleteButton from "./DeleteButton";

async function UsersList() {
  const users = await getUsers();

  return (
    <>
      <h3 className='text-xl mt-4 font-semibold'>UsersList</h3>

      <div className='mt-2'>
        {users.length === 0 ? (
          <p>No users found...</p>
        ) : (
          <ul className='max-w-lg space-y-1.5'>
            {users.map((user) => {
              return (
                <li
                  key={user.id}
                  className='capitalize text-lg flex justify-between items-center'
                >
                  <p>
                    {" "}
                    {user.firstName} {user.lastName}
                  </p>
                  <DeleteButton id={user.id} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default UsersList;
