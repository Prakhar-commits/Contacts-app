const URL = "https://randomuser.me/api/?results=50&seed=5d8e57f13b2c51ac&inc=name,email,id,picture,cell&nat=IN"

export async function loadContacts(){
const result = await fetch(URL);
return (await result.json())?.results;
}