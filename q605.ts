function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    // Find 0 where both i-1 && i+1 == 0s
    // Count the number are free space
    // Return freeSpace >= n
    let freeSpace: number = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
            flowerbed[i] = 1;
            freeSpace++;
        }
    }
    return freeSpace >= n;
 };
