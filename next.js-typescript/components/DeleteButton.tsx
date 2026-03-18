import { deleteUser } from "@/utils/actions";

function DeleteButton({ id }: { id: string }) {
  const removeUserWithId = deleteUser.bind(null, id);

  return (
    <form>
      <button
        type='submit'
        formAction={removeUserWithId}
        className='bg-red-500 text-white text-xs rounded p-2 cursor-pointer'
      >
        Delete
      </button>
    </form>
  );
}

export default DeleteButton;
