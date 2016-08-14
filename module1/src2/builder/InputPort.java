package builder;

/**
 * Created by sala on 16/7/19.
 */
public class InputPort implements Port{
    @Override
    public void transfer() {
        System.out.println("input port");
    }
}
