'use server'

import { readFile, writeFile } from "fs/promises";

type User = {
    id: string;
    firstName: string;
    lastName: string;
}

export async function createUser(formData: FormData) {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;

    const newUser: User = { id: Date.now().toString(), firstName, lastName }
    await saveUser(newUser);

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