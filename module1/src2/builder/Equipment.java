package builder;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by sala on 16/7/19.
 */
public class Equipment {
    private String name;
    private List<Port> ports;
    private Machine machine;

    public Equipment()
    {
        ports = new ArrayList<Port>();
    }

    public void addPort(Port port)
    {
        ports.add(port);
    }

    public void removePort(Port port)
    {
        ports.remove(port);
    }

    public void run()
    {
        System.out.println("The Equipment " + name + " is running as below...");
        ports.forEach(Port::transfer);
        machine.run();
    }


    public List<Port> getPorts() {
        return ports;
    }

    public void setPorts(List<Port> ports) {
        this.ports = ports;
    }

    public Machine getMachine() {
        return machine;
    }

    public void setMachine(Machine machine) {
        this.machine = machine;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
