export default (advertisements, currentUserId, { text }) => {
    return advertisements.filter(advertisement => {
        const textMatch = advertisement.address.toLowerCase().includes(text.toLowerCase());
        const userId = advertisement.userId === currentUserId ? true : false;

        return textMatch && userId
    });
};