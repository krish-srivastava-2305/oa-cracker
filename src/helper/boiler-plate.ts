export const boilerPlateCodeCPP = `#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){

    }
    return 0;
}`

export const boilerPlateCodePython = `t = int(input())
while t > 0

    #your code goes here

    t -= 1
`

export const boilerPlateCodeJava = `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of times to print 'Hello, World!': ");
        int t = scanner.nextInt();
        
        while (t > 0) {
            System.out.println("Hello, World!");
            t--;
        }
        
        scanner.close();
    }
}
`