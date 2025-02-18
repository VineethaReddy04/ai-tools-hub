import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        int num, originalNum, remainder, result = 0;

        System.out.println("Enter a number: ");
        Scanner scanner = new Scanner(System.in);

        num = scanner.nextInt();

        originalNum = num;

        while (originalNum != 0) {
            remainder = originalNum % 10;
            result += remainder * remainder * remainder;
            originalNum /= 10;
        }

        if (result == num)
            System.out.println(num + " is an Armstrong number.");
        else
            System.out.println(num + " is not an Armstrong number.");
    }
}
