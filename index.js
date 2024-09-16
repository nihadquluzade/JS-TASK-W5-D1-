// 1.bir function yazacaqsiniz , 2 parametr qebul edecek , 1i array 1i ise bir eded
// bu eded array daxilinde her hansi 2 ededin cemine beraberdise true qayitsin. Isteseniz hemin 2 ededi array-de console-a cixarda bilersiniz
function hasPairWithSum(arr, targetSum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                console.log(` 2reqem : ${arr[i]} ve ${arr[j]}`);
                return true;
            }
        }
    }
    return false;
}
const numbers = [10, 15, 3, 7];
const sum = 17;
console.log(hasPairWithSum(numbers, sum));
// 2. array-i Bubble Sort-dan istifadə edərək artan sira ile(ascending ) sortlayin
// [64, 34, 25, 12, 22, 11, 90] => [11, 12, 22, 25, 34, 64, 90]
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("siralanmadan evvel:", array);
let sortedArray = bubbleSort(array);
console.log("siralanmadan sonra:", sortedArray);
// 3. arraydaki stringleri alphabetic sira ile sortlayin (Bubble Sort) 
// ["banana", "apple", "cherry", "date"]  = >  ["apple", "banana", "cherry", "date"]
function bubbleSortStrings(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j].localeCompare(arr[j + 1]) > 0) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let fruits = ["banana", "apple", "cherry", "date"];
console.log("Before sorting: ", fruits);
let sortedFruits = bubbleSortStrings(fruits);
console.log(" After sorting: ", sortedFruits);
// 4.  2 ve daha artiq array-leri birlesdiren function yazin (merge edin) (bubble sort)
// [[1, 5, 9], [2, 6], [3, 4, 7, 8]] =>  [1, 2, 3, 4, 5, 6, 7, 8, 9]
function mergeAndSort(arrays) {
    let mergedArray = [].concat(...arrays);
    let n = mergedArray.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (mergedArray[j] > mergedArray[j + 1]) {
                let temp = mergedArray[j];
                mergedArray[j] = mergedArray[j + 1];
                mergedArray[j + 1] = temp;
            }
        }
    }
    return mergedArray;
}
let arrays = [[1, 5, 9], [2, 6], [3, 4, 7, 8]];
console.log( mergeAndSort(arrays));






