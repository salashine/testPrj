package bridge;

/**
 * Created by sala on 16/7/23.
 */
public abstract class AbstractWindow {
    private AbstractWindowImpl impl;
    public abstract void open();
    public abstract void close();
    public abstract void iconify();

}
