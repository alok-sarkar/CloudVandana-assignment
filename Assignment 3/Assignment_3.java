import java.util.*;
import java.util.regex.*;;
/**
 * Assignment 3
 */
public class Assignment_3 {
public static void main(String[] args) {
    System.out.print("Enter A Sentence: ");
        Scanner scan= new Scanner(System.in);
        String str= scan.nextLine();
        System.out.print("Enter the letter: ");
        char letter= scan.next().charAt(0);
        scan.close();
        Pattern pattern=Pattern.compile(letter+"(.*)",Pattern.CASE_INSENSITIVE);
        Matcher matcher=pattern.matcher(str);
        if(matcher.find())
            System.out.println("Result: "+matcher.group(1));
        else
            System.out.println("The letter does not exist in the sentence");
        
}
    
}