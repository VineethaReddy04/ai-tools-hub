#include <stdio.h>

void findDuplicates(int arr[], int size) {
    int i, j;
    printf("Duplicate elements in the array are: \n");
    for (i = 0; i < size; i++) {
        for (j = i + 1; j < size; j++) {
            if (arr[i] == arr[j]) {
                printf("%d\n", arr[i]);
                break;
            }
        }
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 1, 2, 6};
    int size = sizeof(arr) / sizeof(arr[0]);
    findDuplicates(arr, size);
    return 0;
}

