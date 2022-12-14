let i, j, c //c = swap element
let Arr = [9, -9, 3, 7, 5, -4]
console.log(Arr)
for (i = 0; i < Arr.length - 1; i++) {
    for (j = Arr.length - 2; j >= i; j--) {
        if (Arr[j] > Arr[j + 1]) { //Arr[j] < Arr[j+1] olarsa, azalan sıra ilə düzülür 
            c = Arr[j]
            Arr[j] = Arr[j + 1]
            Arr[j + 1] = c
        }
    }
}

console.log(Arr)