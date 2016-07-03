import java.util.ArrayList;
import java.util.List;

/**
 * Created by sala on 16/6/10.
 */
public class VMStackSOF {
    private int stackLenght = 1;
    public void stackLeak(){
        stackLenght++;
        stackLeak();
    }

    public static void main(String[] args) {
        VMStackSOF oom = new VMStackSOF();
        try {
            oom.stackLeak();
        } catch (Exception e) {
            System.out.println("stackLenght:" + oom.stackLenght);
            //this is edit in branch  feature-a

            //- fix-b
        }
    }
}