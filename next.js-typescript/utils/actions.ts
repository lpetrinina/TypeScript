'use server'

import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";


type User = {
    id: string;
    firstName: string;
    lastName: string;
}

export async function createUser(prevState: any, formData: FormData) {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;

    const newUser: User = { id: Date.now().toString(), firstName, lastName };

    try {
        await saveUser(newUser);
        revalidatePath('/actions');

        return { succes: 'user created successfully' }

    } catch (error) {
        console.log(error)
        return { error: 'failed to create user...' }
    }

}

export async function getUsers(): Promise<User[]> {
    const result = await readFile('users.json', { encoding: 'utf8' });
    const users = result ? JSON.parse(result) : [];

    return users;
}

async function saveUser(user: User) {
    const users = await getUsers();
    users.push(user);

    await writeFile('users.json', JSON.stringify(users));
}