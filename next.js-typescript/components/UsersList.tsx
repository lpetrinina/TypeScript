import { getUsers } from "@/utils/actions";

async function UsersList() {
  const users = await getUsers();

  return (
    <>
      <h3 className='text-xl mt-4 font-semibold'>UsersList</h3>

      <div className='mt-2'>
        {users.length === 0 ? (
          <p>No users found...</p>
        ) : (
          <ul>
            {users.map((user) => {
              return (
                <li key={user.id} className='capitalize text-lg'>
                  {user.firstName} {user.lastName}
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
