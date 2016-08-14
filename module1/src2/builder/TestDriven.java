package builder;

/**
 * Created by sala on 16/7/19.
 */
public class TestDriven {
    public static void main(String[] args) {
        Machine machine = new Machine("InputOutputMachine");
        Equipment equipment = new Equipment();
        equipment.setName(machine.getName());

        equipment.addPort(new InputPort());
        equipment.addPort(new OnputPort());
        equipment.addPort(new InputPort());
        equipment.setMachine(machine);

        equipment.run();
    }
}
