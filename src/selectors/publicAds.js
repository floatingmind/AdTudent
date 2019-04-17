export default (advertisements, { text }) => {
    return advertisements.filter(advertisement => advertisement.address.toLowerCase().includes(text.toLowerCase()));
};