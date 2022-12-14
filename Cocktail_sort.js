function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
function cocktail(A) {
    let left = 0
    let right = A.length - 1
    let Swapped = false
    let say = 0

    while (left < right) {
        say++
        for (let i = left; i < right; i++) {
            if (A[i] > A[i + 1]) {
                swap(A, i, i + 1)
                Swapped = true
            }
        }
        right--
        for (let i = right; i > left; i--) {
            if (A[i] < A[i - 1]) {
                swap(A, i, i - 1)
                Swapped = true
            }
        }
        left++
        if (!Swapped) {
            return say
        }
        else {
            Swapped = false
        }
    }
    return say
}

const Arr = [0, -1, 4, 5, 2, -3];
console.log(Arr)
cocktail(Arr)
console.log(Arr)