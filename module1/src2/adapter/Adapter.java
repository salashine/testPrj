package adapter;

/**
 * Created by sala on 16/7/23.
 */
public class Adapter extends Adaptee implements Target {
    @Override
    public void request() {
        this.specificRequest();
    }
}
