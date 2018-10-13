export default class Debugger
{
    constructor()
    {

    }

    error(err)
    {
        console.log(' Error '.bgRed.white.bold);
        console.log(err);
    }

    success(data)
    {
        console.log(' Success! '.bgGreen.white.bold);
        console.log(data);
    }
}