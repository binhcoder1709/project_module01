export function formatDate()
{
    const day = new Date();
    const date = day.getDate().toString().padStart(2, 0);
    const month = +day.getMonth().toString().padStart(2, 0);
    const year = day.getFullYear().toString().padStart(2, 0);
    const hour = day.getHours().toString().padStart(2, 0);
    const min = day.getMinutes().toString().padStart(2, 0);
    const sec = day.getSeconds().toString().padStart(2, 0);
    return `${date}/${month+1}/${year}-${hour}:${min}:${sec}`;
}