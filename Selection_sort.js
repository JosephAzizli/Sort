let i, j, c, k //c = swap element, k = other position
let Arr = [3, -19, 2, -7, 4, 1]
console.log(Arr)
for (i = 0; i < Arr.length - 1; i++) {
    k = i
    for (j = i + 1; j < Arr.length; j++) {
        if (Arr[j] < Arr[k]) //A[j]>A[k] olarsa, azalan sıra ilə düzülür
            k = j
        if (k != i) {
            c = Arr[i]
            Arr[i] = Arr[k]
            Arr[k] = c
        }
    }
}

console.log(Arr)