const getResultGame = (playerSelect, computerSelect) => {
    let times = 0;
    let score = 0;
    switch (playerSelect) {
        case 'keo':
            switch (computerSelect) {
                case 'bao':
                    score += 1;
                    times += 1;
                    break;
                case 'bua':
                    times -= 1;
                    break;
                default:
                    break;
            }
            break;
        case 'bao':
            switch (computerSelect) {
                case 'keo':
                    times -= 1;
                    break;
                case 'bua':
                    score += 1;
                    times += 1;
                    break;
                default:
                    break;
            }
            break;
        default:
            switch (computerSelect) {
                case 'bao':
                    times -= 1;
                    break;
                case 'keo':
                    score += 1;
                    times += 1;
                    break;
                default:
                    break;
            }
            break;
    }
    return { times, score };
}
export default getResultGame;